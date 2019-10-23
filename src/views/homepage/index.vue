<template>
    <div class="homepage">
        <carousel></carousel>
        <new-product></new-product>
        <selection></selection>
        <bags></bags>
        <home></home>
        <acc></acc>
    </div>
</template>

<script>
  import carousel from '@/views/homepage/carousel'
  import newProduct from '@/views/homepage/new-product'
  import selection from '@/views/homepage/selection'
  import bags from '@/views/homepage/bags'
  import home from '@/views/homepage/home'
  import acc from '@/views/homepage/acc'

  export default {
    name: 'homepage',
    components: {
      carousel,
      newProduct,
      selection,
      bags,
      home,
      acc
    }
  }
</script>

<style lang="scss" scoped>
    .homepage {
        padding-bottom: 24px;
    }
</style>