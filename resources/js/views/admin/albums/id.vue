<template>
    <div>
        <b-card>
            <template #header>
                <b-row class="justify-content-between">
                    <div>{{ album.title }}</div>
                </b-row>
            </template>
            <vue-picture-swipe :items="items"></vue-picture-swipe>
            <template #footer>
                <div
                    class="d-flex align-items-center justify-content-around gx-5"
                >
                    <b-button variant="info" @click="showUploadModal"
                        >Add New Images</b-button
                    >
                    <edit-album
                        :album="album"
                        @update-album="updateAlbum"
                    ></edit-album>
                    <b-button variant="info">
                        <router-link to="/albums" class="text-white"
                            >Back to Albums</router-link
                        >
                    </b-button>
                    <b-button variant="danger" @click="showDeleteModal"
                        >Delete Album</b-button
                    >
                    <b-button variant="danger" @click="showDeleteImagesModal"
                        >Delete Images</b-button
                    >
                </div>
            </template>
        </b-card>

        <!-- UPLOAD IMAGES -->
        <b-modal v-model="uploadModalOpen" title="Add Images" size="xl">
            <div>
                <input type="file" multiple @change="handleFileInputChange" />
                <div v-for="preview in imagePreviews" :key="preview.id">
                    <img
                        :src="preview.src"
                        :alt="preview.name"
                        width="500"
                            height="300"
                    />
                </div>
            </div>
            <template #modal-footer>
                <div>
                    <b-button variant="info" @click="uploadImages"
                        >OK</b-button
                    >
                    <router-link to="/albums" class="btn btn-info"
                        >Back to Albums</router-link
                    >
                </div>
            </template>
        </b-modal>

        <!-- DELETE ALBUM -->
        <b-modal v-model="deleteModalOpen" title="Confirm Delete">
            <div>Are you sure you want to delete this album?</div>
            <template #modal-footer>
                <div>
                    <b-button variant="primary" @click="deleteAlbum"
                        >Delete</b-button
                    >
                    <b-button
                        variant="secondary"
                        @click="deleteModalOpen = false"
                        >Cancel</b-button
                    >
                </div>
            </template>
        </b-modal>

        <!-- DELETE IMAGES -->
        <b-modal
            v-model="deleteImagesModalOpen"
            size="xl"
            title="Delete Images"
        >
            <div>
                <div v-for="image in album.images" :key="image.id">
                    <label>
                        <input
                            type="checkbox"
                            v-model="selectedImages"
                            :value="image.id"
                            width="500"
                            height="300"
                        />
                    </label>
                    <img :src="image.url" alt="" />
                </div>
            </div>
            <template #modal-footer>
                <div>
                    <b-button variant="primary" @click="deleteImages"
                        >Delete</b-button
                    >
                    <b-button
                        variant="secondary"
                        @click="deleteImagesModalOpen = false"
                        >Cancel</b-button
                    >
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
import { computed, inject, onMounted, ref } from "@vue/composition-api";
import router from "@/router.js";
import VuePictureSwipe from "vue-picture-swipe";
import axios from "axios";
import EditAlbum from "@/components/pages/AlbumForm.vue";

export default {
    components: {
        VuePictureSwipe,
        EditAlbum
    },
    setup(props, { root }) {
        const store = inject("vuex-store");
        const album = computed(() => store.state.album.album);
        const items = computed(() =>
            album.value.images ? album.value.images.map(transformImage) : []
        );

        const uploadModalOpen = ref(false);
        const deleteModalOpen = ref(false);
        const deleteImagesModalOpen = ref(false);
        const selectedFiles = ref([]);
        const imagePreviews = ref([]);
        const selectedImages = ref([]);

        onMounted(() => store.dispatch("showAlbum", root.$route.params.id));

        function updateAlbum(payload) {
            store.dispatch("updateAlbum", payload);
            store.dispatch("showAlbum", root.$route.params.id)
        }

        function showUploadModal() {
            uploadModalOpen.value = true;
        }

        function handleFileInputChange(event) {
            selectedFiles.value = Array.from(event.target.files);
            generateImagePreviews();
        }

        function generateImagePreviews() {
            imagePreviews.value = [];
            selectedFiles.value.forEach(file => {
                const reader = new FileReader();
                reader.onload = e => {
                    imagePreviews.value.push({
                        id: generateId(),
                        src: e.target.result,
                        name: file.name
                    });
                };
                reader.readAsDataURL(file);
            });
        }

        function generateId() {
            return Math.random()
                .toString(36)
                .substr(2, 9);
        }

        async function uploadImages() {
            const formData = new FormData();
            selectedFiles.value.forEach(file => {
                formData.append("images[]", file);
            });

            try {
                await axios.post(
                    `albums/${album.value.id}/images`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );
                // Success message or additional logic
                store.dispatch("showAlbum", root.$route.params.id)
                uploadModalOpen.value = false;
                selectedFiles.value = [];
                imagePreviews.value = [];
            } catch (error) {
                // Error handling
            }
        }

        function transformImage(image) {
            return {
                src: image.url,
                thumbnail: image.url,
                w: 1000,
                h: 800
            };
        }

        function showDeleteModal() {
            deleteModalOpen.value = true;
        }

        function deleteAlbum() {
            store.dispatch("deleteAlbum", root.$route.params.id);
            router.push('/albums')
            deleteModalOpen.value = false;
        }

        function showDeleteImagesModal() {
            selectedImages.value = [];
            deleteImagesModalOpen.value = true;
        }

        async function deleteImages() {
            await store.dispatch("deleteImages", selectedImages.value);

            store.dispatch("showAlbum", root.$route.params.id);
        }

        return {
            album,
            items,
            imagePreviews,
            uploadModalOpen,
            deleteModalOpen,
            deleteImagesModalOpen,
            selectedFiles,
            selectedImages,
            showUploadModal,
            handleFileInputChange,
            generateImagePreviews,
            uploadImages,
            updateAlbum,
            showDeleteModal,
            deleteAlbum,
            showDeleteImagesModal,
            deleteImages
        };
    }
};
</script>

<style lang="scss">
.my-gallery {
    img {
        max-width: 400px;
        margin-bottom: 20px;
    }
}
.modal-dialog {
    img {
        max-width: 400px;
        margin-bottom: 20px;
    }
}
</style>
