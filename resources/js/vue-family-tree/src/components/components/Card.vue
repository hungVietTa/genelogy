<template>
    <div class="vue-family-card">
        <a href="#" @click.prevent="click" class="avatar-container"
            ><img class="avatar-image" :src="img_link" alt=""
        /></a>

        <div class="vue-family-card__name">
            <a href="#" @click.prevent="click">
                {{ name }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "FamilyCard",
    props: {
        name: String,
        img_link: String,
        source: Object
    },
    methods: {
        click() {
            this.$emit("click", this.source);
        }
    }
};
</script>

<style lang="scss" scoped>
.vue-family-card {
    text-align: center;
    width: 100px;
    &__image {
        display: block;
        width: 100px;
        height: 100px;
        margin-bottom: 16px;
        background-position: 50%;
        background-size: cover;
        background-color: #dedede;
    }
    &__name {
        font-weight: 600;
        a {
            color: #000;
            text-decoration: none;
        }
    }
}

.avatar-container {
    display: block;
    margin: auto;
    width: 100px;
    height: 100px;
    overflow: hidden;
    background-color: #dedede;
}

.avatar-image {
    width: 100%; /* Make the width of the image 100% of the container */
    height: auto; /* Allow the height to adjust based on the image's aspect ratio */
    object-fit: cover;
}
</style>
