<template>
    <div>
        <b-button variant="info" @click="openModal">
            <slot>Sửa đổi</slot>
        </b-button>

        <b-modal v-model="showModal" @ok="submitForm" title="Edit Album">
            <b-form>
                <b-form-group label="Title" label-for="title">
                    <b-form-input
                        id="title"
                        v-model="form.title"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Description" label-for="description">
                    <b-form-textarea
                        id="description"
                        v-model="form.description"
                    ></b-form-textarea>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        album: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: {
                title: "",
                description: ""
            },
            showModal: false
        };
    },
    watch: {
        album: {
            immediate: true,
            handler() {
                this.form.title = this.album.title;
                this.form.description = this.album.description;
            }
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        submitForm() {
            // Emit an event with the updated album data
            this.$emit("update-album", {
                id: this.album.id,
                albumData: this.form
            });
            this.showModal = false;
        }
    }
};
</script>
