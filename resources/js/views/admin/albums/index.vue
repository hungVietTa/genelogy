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
            <CreateAlbum @update-album="$event => createAlbum($event.albumData)" :album="{}"
                >Create New</CreateAlbum
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
    },
    mounted() {
        this.fetchAlbums();
    }
};
</script>
