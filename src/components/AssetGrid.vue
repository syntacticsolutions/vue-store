<template>
    <section class="item-grid">
        <div class="item-card"
            v-for="(itemObj, key) in items"
            :key="key"
        >
            <div
                class="item-card-value-container"
            >
                <figure>
                    <p
                        class="item-title"
                        :style="{ width: `${ imageConfig.sm[1] - 1 }px` }"
                    >{{ itemObj.title }}</p>
                    <img :src="itemObj.image" :width="`${imageConfig.sm[1]}px`" :height="`${imageConfig.sm[0]}px`" />
                </figure>
                <p
                    class="item-price"
                    :style="{ width: `${ imageConfig.sm[1] - 11 }px` }"
                >{{ itemObj.price }}</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['items'],
    computed: {
        storeConfig () {
            return this.$store.state.storeConfig
        },
        imageConfig () {
            return this.storeConfig.find(el => el.type === 'preview')
        }
    }
}
</script>

<style lang="scss" scoped>
    .item-grid {
        margin-top: 30px;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        justify-items: center;
        justify-content: center;

        .item-card-value-container {
            position: relative;
            display: flex;
            justify-content: space-between;

            .item-title,
            .item-price {
                position: absolute;
                background: #fff;
                opacity: .9;
                height: 30px;
                margin-left: 1px;
                margin-block-start: 0px;
                margin-block-end: 1px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            }

            .item-price {
                bottom: 0;
                border-top: 1px solid #ddd;
                justify-content: flex-start;
                padding-left: 10px;
                font-weight: 500;
                font-size: 18px;
            }

            figure {
                justify-self: center;
                border: 1px solid #999;
                border-radius: 1px;
                position:relative;
            }
        }
    }
</style>
