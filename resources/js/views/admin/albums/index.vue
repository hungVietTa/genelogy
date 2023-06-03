<template>
    <div class="mt-5">
        <AlbumList
            class="mb-5"
            v-for="album in albums"
            :key="album.id"
            :album="album"
        >
        </AlbumList>

        <div class="mb-4 text-center">
            <CreateAlbum
                @update-album="$event => onCreate($event)"
                :album="{}"
                >Tạo album mới</CreateAlbum
            >
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AlbumList from "@/components/pages/AlbumList.vue";
import CreateAlbum from "@/components/pages/AlbumForm.vue";

export default {
    components: {
        AlbumList,
        CreateAlbum
    },
    computed: {
        ...mapGetters(["albums"])
    },
    methods: {
        ...mapActions([
            "fetchAlbums",
            "createAlbum",
            "updateAlbum",
            "deleteAlbum"
        ]),
        async onCreate(form) {
            await this.createAlbum(form.albumData);
            this.fetchAlbums();
        }
    },
    mounted() {
        this.fetchAlbums();
    }
};
</script>

<style lang="scss">
.VueCarousel-inner {
    align-items: center;
    gap:10px;

    .VueCarousel-slide {
    flex-grow: unset;
    flex-shrink: unset;
    flex-basis: unset;
    img {
        max-width: 300px;
    }
}
}


</style>
