<template>
    <div class="carousel">
        <b-carousel fade indicators img-width="1024" img-height="480">
            <b-carousel-slide v-for="(item, index) in carouselData"
                              :key="index"
                              :img-src="item.src"
                              :caption="item.caption"
                              :text="item.text">
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
  import carouselData from './carouselData'

  export default {
    name: 'carousel',
    data() {
      return {
        carouselData
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>