<template>
    <div id="app">
        <div class="top-bar-wrapper">
            <top-bar></top-bar>
        </div>
        <div class="body-wrapper">
            <router-view/>

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
        display: flex;
        flex-direction: column;
    }

    .top-bar-wrapper {
        flex-grow: 0;
        flex-shrink: 0;
    }

    .body-wrapper {
        min-height: calc(100% - 60px);
        overflow: auto;
    }

    .icon {
        width: 16px;
        height: 16px;
    }
</style>
