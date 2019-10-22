<template>
    <div class="bottom-bar">
        <span class="item">
            <img class="beian-pic" :src="beian" alt="浙ICP备17000871号-3">浙ICP备17000871号-3</span>
        <span class="item">Designed by Capsule Events</span>
    </div>
</template>

<script>
  import beian from '@/assets/beian.png'

  export default {
    name: 'BottomBar',
    data() {
      return {
        beian
      }
    }
  }
</script>

<style lang="scss" scoped>
    .bottom-bar {
        height: 60px;
        line-height: 60px;
        background-color: black;
        color: rgba(255, 255, 255, .7);
        font-size: 12px;
        text-align: center;

        .item {
            padding: 0 12px;

            .beian-pic {
                width: 16px;
                height: 16px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 4px;
            }
        }
    }
</style>