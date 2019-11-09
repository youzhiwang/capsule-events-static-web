<template>
    <div class="homepage">
        <div class="text-banner">
            <p class="main-text">
                I know you are so special
                <br>
                and worth to be treated specially.
            </p>
            <p class="vice-text">
                'Moderation is for cowards', doing the things you want to do.
            </p>
        </div>
        <carousel></carousel>
        <new-product></new-product>
        <selection></selection>
        <bags></bags>
        <home></home>
        <acc></acc>
        <div class="blank-bar"></div>
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
        background-image: url("https://s2.ax1x.com/2019/11/09/MmW6i9.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .text-banner {
            width: 100%;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .main-text {
                font-size: 70px;
                font-weight: bold;
                text-align: center;
                color: #ffffff;
                font-family: 'Impact', 'neosansstd-bold', Georgia, "Times New Roman", serif;
                margin: 0;
            }

            .vice-text {
                font-size: 24px;
                color: #ffffff;
            }
        }

        .blank-bar {
            height: 24px;
            background-color: #ffffff;
        }
    }
</style>