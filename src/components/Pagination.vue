<template>
    <span>
        <ul class="pagination" style="white-space: pre;">
            <li class="pagination-link" @click="go(0)">&lt;&lt;    </li>
            <li class="pagination-link" @click="go(-1)">&lt;    </li>
            <li>|    </li>
            <li>Page: {{ page }} of {{ pages }}    </li>
            <li>|    </li>
            <li class="pagination-link" @click="go(1)">&gt;    </li>
            <li class="pagination-link" @click="go(2)">&gt;&gt;</li>
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

    .pagination-link {
        letter-spacing: -2px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 500;
    }
}
</style>
