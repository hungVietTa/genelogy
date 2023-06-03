<template>
    <b-card>
      <template v-slot:header>
           <h5>{{ album.title }}</h5>
        </template>
        <carousel>
            <slide v-for="image in album.images" :key="image.id">
                <img :src="image.url" alt="" />
            </slide>
        </carousel>
        <template v-slot:footer>
            <router-link :to="`/albums/${album.id}`">Chi tiết</router-link>
        </template>
    </b-card>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: {
        Carousel,
        Slide
    },
    props: {
        album: {
            type: Object,
            required: true
        }
    }
};
</script>
