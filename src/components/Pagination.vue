<template>
    <span>
        <ul class="pagination" style="white-space: pre;">
            <li class="page-far-left" @click="go(0)" style="white-space: pre;">
                <i class="ion-ios-arrow-back" />
                <i class="ion-ios-arrow-back" />
            </li>
            <li class="page-left" @click="go(-1)">
                <i class="ion-ios-arrow-back" />    </li>
            <li>|    </li>
            <li>Page: {{ page }} of {{ pages }}    </li>
            <li>|    </li>
            <li class="page-right" @click="go(1)">
                <i class="ion-ios-arrow-forward" />
            </li>
            <li class="page-far-right" @click="go(2)">
                <i class="ion-ios-arrow-forward" />
                <i class="ion-ios-arrow-forward" />
            </li>
        </ul>
    </span>
</template>
<script>
export default {
    data: () => ({

    }),
    methods: {
        go (val) {
            let newPage
            if (val === 0) {
                newPage = 1
            }
            if (val === -1) {
                newPage = (this.page - 1) ? this.page - 1 : this.page
            }
            if (val === 1) {
                newPage = (this.page + 1 <= this.pages) ? this.page + 1 : this.page
            }
            if (val === 2) {
                newPage = this.pages
            }
            this.$emit('change', newPage)
        }
    },
    computed: {
        page () { return this.$store.state.page },
        pages () {
            let { viewingAmount, storeItems } = this.$store.state
            let remainder = storeItems.length % viewingAmount
            return Math.floor(storeItems.length / viewingAmount) + (remainder ? 1 : 0)
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;

    li {
        display: flex;
        list-style-type: none;
        justify-content: center;
        align-items: center;
    }

    .page-far-left,
    .page-left {
        display: flex;
        justify-content: flex-start;
        width: 20px;
        cursor: pointer;
    }

    .page-far-right,
    .page-right {
        display: flex;
        justify-content: flex-end;
        width: 20px;
        cursor: pointer;
    }
}
</style>
