<template>
    <div class="member-card">
        <b-button variant="info" @click="showModal">Thêm thành viên</b-button>

        <b-modal
            v-model="modalShow"
            title="Thành viên"
            size="lg"
            footer-class="justify-content-between"
            @close="$emit('toggleModal', false)"
        >
            <b-container>
                <b-row>
                    <div class="w-100">
                        <b-card class="mt-4">
                            <div class="avatar-container">
                                <img
                                    v-if="previewUrl || ancestor.img_link"
                                    class="avatar-image"
                                    :src="previewUrl || ancestor.img_link"
                                />
                                <img
                                    v-else
                                    class="avatar-image"
                                    :src="yourImage"
                                    alt=""
                                />
                            </div>
                        </b-card>
                        <b-form-file
                            v-model="selectedFile"
                            @change="handleFileChange"
                            class="mb-3"
                        >
                            <template v-slot:file-name>
                                <strong>Chọn ảnh:</strong>
                                {{
                                    selectedFile
                                        ? selectedFile.name
                                        : "No file chosen"
                                }}
                            </template>
                        </b-form-file>
                    </div>
                </b-row>
                <b-row>
                    <b-col md="6">
                        <b-form-group label="ID">
                            <b-form-input
                                v-model="formValue.id"
                                disabled
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group label="Họ và tên">
                            <b-form-input
                                v-model="formValue.name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6">
                        <b-form-group label="Con của ông/bà">
                            <vue-select
                                v-if="formValue.parent_id || !formValue.id"
                                v-model="formValue.parent_id"
                                :options="parentOptions"
                                :disabled="!ancestor.parent_id && !!formValue.id || !!formValue.spouse_id"
                                label="name"
                                :filterable="true"
                                :reduce="reduceOption"
                            ></vue-select>

                            <vue-select
                                v-else
                                v-model="ancestor.parent_in_law_id"
                                :options="parentOptions"
                                :disabled="!ancestor.parent_id"
                                label="name"
                                :filterable="true"
                                :reduce="reduceOption"
                            ></vue-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group label="Là con thứ: ">
                            <b-form-input
                            type="number"
                                v-model="formValue.nth"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6">
                        <b-form-group id="spouse_idFormGroup" label="( Dâu/Rể ) Là vợ chồng của:">
                            <vue-select
                                v-if="formValue.spouse_id || !formValue.id"
                                v-model="formValue.spouse_id"
                                :options="spouseOptions"
                                label="name"
                                :disabled="!!formValue.parent_id"
                                :filterable="true"
                                :reduce="reduceOption"
                            ></vue-select>
                            <div class="form-control" v-else>
                                <span v-if="ancestor.spouses">{{
                                    ancestor.spouses
                                        .map(item => item.name)
                                        .join(" ,")
                                }}</span>
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group label="Nam nữ">
                            <b-form-select v-model="formValue.gender">
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-container>

            <template #modal-footer>
                <div v-show="formValue.id">
                    <b-button variant="danger" @click="modalDestroyShow = true"
                        >Delete</b-button
                    >
                </div>
                <div class="ms-auto text-right">
                    <b-button
                        variant="secondary"
                        @click="$emit('toggleModal', false)"
                        >Quay lại</b-button
                    >
                    <b-button variant="info" @click="submitForm"
                        >Xác nhận</b-button
                    >
                </div>
            </template>
        </b-modal>

        <b-modal
            v-model="modalDestroyShow"
            title="Alert"
            ok-only
            @ok="undo"
        >
            Bạn thực sự muốn thực hiện hành động này ?
        </b-modal>
    </div>
</template>

<script>
import {
    defineComponent,
    ref,
    computed,
    inject,
    watch
} from "@vue/composition-api";
import axios from "axios";
import yourImage from "@/assets/images/Profile_avatar_placeholder_large.png";
import { cloneDeep, omit } from "lodash";
import { extractInputData } from "@/composables/memberFormHandle.js";

export default defineComponent({
    emits: ["toggleModal"],
    props: {
        modalVisible: {
            type: Boolean,
            default: () => false
        }
    },
    setup(props, { emit }) {
        const selectedFile = ref(null);
        const previewUrl = ref(null);

        const modalShow = ref(false);
        const modalDestroyShow = ref(false);
        const store = inject("vuex-store");
        const ancestor = computed(() => store.state.member);

        store.dispatch("getOptions");

        const input = {
            id: null,
            spouse_id: null,
            parent_id: null,
            nth: null,
            name: "",
            gender: null,
            img_url: null
        };

        const formValue = ref(cloneDeep(input));

        const spouseOptions = computed(() => store.state.ancestorOptions ?? []);
        const parentOptions = computed(() => store.state.ancestorOptions ?? []);

        const setNewData = () => (formValue.value = cloneDeep(input));

        const reduceOption = option => option.id;

        const undo = async id => {
            await store.dispatch("undoMember", formValue.value.id);
            modalDestroyShow.value = false;
            emit("toggleModal", false);
        };

        const showModal = () => {
            setNewData();
            store.commit("setMember", {});
            previewUrl.value = null;
            emit("toggleModal", true);
        };

        const submitForm = () => {
            if (formValue.value.id) {
                const id = formValue.value.id;
                const data = omit(formValue.value, "id");

                store.dispatch("updateMember", { id, data });
            } else store.dispatch("plusMember", formValue.value);
            emit("toggleModal", false);
        };

        const handleFileChange = event => {
            const file = event.target.files[0];

            if (file) {
                selectedFile.value = file;
                previewUrl.value = URL.createObjectURL(file);

                const formData = new FormData();
                formData.append("image", selectedFile.value);

                axios
                    .post("upload", formData)
                    .then(response => {
                        const imagePath = response.data.imagePath;
                        formValue.value.img_url = imagePath;
                    })
                    .catch(error => {
                        // Handle the error
                        console.error("Image Upload Error:", error);
                    });
            } else {
                selectedFile.value = null;
                previewUrl.value = null;
            }
        };

        watch(
            ancestor,
            () => {
                if (ancestor.value.id)
                    formValue.value = extractInputData(
                        cloneDeep(ancestor.value)
                    );
            },
            { immediate: true }
        );

        watch(
            () => props.modalVisible,
            () => {
                modalShow.value = props.modalVisible;
            }
        );

        watch(ancestor, () => {
            previewUrl.value = null;
        });

        watch(modalShow, () => emit("toggleModal", modalShow.value));

        return {
            selectedFile,
            previewUrl,
            ancestor,
            formValue,
            spouseOptions,
            parentOptions,
            modalShow,
            modalDestroyShow,
            yourImage,
            showModal,
            setNewData,
            submitForm,
            undo,
            reduceOption,
            handleFileChange
        };
    }
});
</script>

<style>
.vue-family-tree {
    height: 800px !important;
}
.avatar-container {
    margin: auto;
    width: 200px;
    height: 200px;
    overflow: hidden;
}

.avatar-image {
    width: 100%; /* Make the width of the image 100% of the container */
    height: auto; /* Allow the height to adjust based on the image's aspect ratio */
    object-fit: cover;
}
</style>
