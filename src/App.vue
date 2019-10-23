<template>
    <div id="app">
        <div class="top-bar-wrapper">
            <top-bar></top-bar>
        </div>
        <div class="body-wrapper">
            <router-view/>
        </div>
        <div class="bottom-bar-wrapper">
            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>
<script>
  import TopBar from '@/components/TopBar/index.vue'
  import BottomBar from '@/components/BottomBar/index.vue'

  export default {
    name: 'app',
    components: {TopBar, BottomBar}
  }
</script>
<style lang="scss">
    html, body {
        width: 100%;
        min-width: 1200px;
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        overflow: auto;
    }

    .body-wrapper {
        min-height: calc(100% - 120px);
    }

    .icon {
        width: 16px;
        height: 16px;
    }
</style>
