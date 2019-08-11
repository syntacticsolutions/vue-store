<template>
    <div>
        <Pagination @change="$store.commit('setPage', $event)" />
        <AssetGrid :items="computedItems"></AssetGrid>
        <Pagination @change="$store.commit('setPage', $event)" />
    </div>
</template>
<script>
import AssetGrid from '@/components/AssetGrid.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    components: {
        AssetGrid,
        Pagination
    },
    computed: {
        computedItems (val) {
            let { page, viewingAmount, storeItems } = this.$store.state

            let lastIndex = page * viewingAmount
            let firstIndex = lastIndex - viewingAmount

            return storeItems.slice(firstIndex, lastIndex)
        }
    }
}
</script>
<style lang="scss">
</style>
