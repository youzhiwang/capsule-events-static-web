<template>
    <div class="home">
        <div class="carousel-wrapper">
            <b-carousel id="carousel-fade"
                        style="text-shadow: 0 0 2px #000"
                        fade
                        indicators
                        img-width="1024"
                        img-height="480">
                <b-carousel-slide v-for="(item, index) in carouselData"
                                  :key="index"
                                  :img-src="item.src"
                                  :caption="item.caption"
                                  :text="item.text"></b-carousel-slide>
            </b-carousel>
        </div>
        <div v-if="notice.src !== ''" class="notice-wrapper">
            <p class="title">新品预告</p>
            <img :src="notice.src" :alt="notice.name" width="100%">
        </div>
        <selection></selection>
        <bag></bag>
        <home-furnishing></home-furnishing>
        <acc></acc>
        <div class="blank"></div>
    </div>
</template>

<script>
  import carouselData from './carouselData'
  import notice from './notice'
  import selection from '@/views/home/selection'
  import bag from '@/views/home/bag'
  import homeFurnishing from '@/views/home/home-furnishing'
  import acc from '@/views/home/acc'

  export default {
    name: 'home',
    components: {selection, bag, homeFurnishing, acc},
    data() {
      return {
        carouselData, // 轮播
        notice // 新品预告
      }
    }
  }
</script>

<style lang="scss" scoped>
    .home {
        .notice-wrapper {
            width: 1200px;
            margin: 0 auto;
        }

        .blank {
            height: 60px;
        }
    }

    .title {
        text-align: center;
        font-size: 32px;
        margin: 24px 0;
    }
</style>