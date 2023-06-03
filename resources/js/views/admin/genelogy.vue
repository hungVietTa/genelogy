<template>
    <div id="app">
        <div class="mt-4">
            <Member
                :modalVisible="modalVisible"
                @toggleModal="$event => (modalVisible = $event)"
            ></Member>
            <VueFamilyTree :tree="trees" @card-click="cardClick" />
        </div>
    </div>
</template>

<script>
import VueFamilyTree from "@/vue-family-tree/src/components/VueFamilyTree.vue";
import Member from "@/components/form/Member.vue";

import {
    defineComponent,
    ref,
    inject,
    computed,
    onMounted
} from "@vue/composition-api";

export default defineComponent({
    components: {
        VueFamilyTree,
        Member
    },
    setup() {
        const store = inject("vuex-store");
        const trees = computed(() => store.state.genology ?? []);

        const cardClick = async item => {
            await store.dispatch("getMember", item.id);
            modalVisible.value = true;
        };

        const modalVisible = ref(false);

        onMounted(() => store.dispatch("getTree"));

        return {
            trees,
            modalVisible,
            cardClick
        };
    }
});
</script>

<style lang="scss">
.vue-family-tree {
    height: 1700px !important;
}
</style>
