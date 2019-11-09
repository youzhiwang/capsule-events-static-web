<template>
    <div class="new-product">
        <div class="new-product-container" v-if="newProductData.src !== ''">
            <p class="title">{{newProductData.title}}</p>
            <img :src="newProductData.src" alt="" width="100%">
        </div>
    </div>
</template>

<script>
  import newProductData from './newProductData'

  export default {
    name: 'new-product',
    data() {
      return {
        newProductData
      }
    }
  }
</script>

<style lang="scss" scoped>
    .new-product {
        background-color: #ffffff;
        overflow: hidden;

        .new-product-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                text-align: center;
                font-size: 32px;
                margin: 40px 0;
            }
        }
    }
</style>