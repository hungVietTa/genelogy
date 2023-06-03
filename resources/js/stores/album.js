import axios from "axios";

const albumModule = {
    state: {
        albums: [],
        album: {}
    },
    getters: {
        albums: state => {
            return state.albums;
        }
    },
    actions: {
        fetchAlbums: async context => {
            const response = await axios.get("albums");
            context.commit("setAlbums", response.data.albums);
        },
        createAlbum: async (context, albumData) => {
            const response = await axios.post("albums", albumData);
            context.commit("addAlbum", response.data.album);
            context.dispatch("fetchAlbums");
        },
        updateAlbum: async (context, { id, albumData }) => {
            await axios.put(`albums/${id}`, albumData);
            context.commit("updateAlbum", albumData);
            context.dispatch("fetchAlbums");
        },
        deleteAlbum: async (context, id) => {
            await axios.delete(`albums/${id}`);
            context.commit("removeAlbum", id);
            context.dispatch("fetchAlbums");
        },
        showAlbum: async (context, id) => {
            const response = await axios.get(`albums/${id}`);

            context.commit("setAlbum", response.data.album);
        },
        deleteImages: async (context, ids) => {
            await axios.delete(`images`, {
                data: {
                    image_ids: ids
                }
            });

            // context.dispatch('fetchAlbums')
        }
    },
    mutations: {
        setAlbums: (state, albums) => {
            state.albums = albums;
        },
        addAlbum: (state, album) => {
            state.albums.push(album);
        },
        updateAlbum: (state, { id, albumData }) => {
            const index = state.albums.findIndex(album => album.id === id);
            if (index !== -1) {
                state.albums[index] = { ...state.albums[index], ...albumData };
            }
        },
        removeAlbum: (state, id) => {
            state.albums = state.albums.filter(album => album.id !== id);
        },
        setAlbum: (state, album) => {
            console.log(album);
            state.album = album;
        }
    }
};

export default albumModule;
