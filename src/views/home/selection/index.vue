<template>
    <div class="selection">
        <p class="title">精选</p>
        <div class="selction-container">
            <b-card v-for="(item, index) in selectionData" :key="index"
                    class="selection-item"
                    :img-src="item.src"
                    img-top
                    tag="article">
                <b-card-text>{{item.text}}</b-card-text>
                <b-button :href="item.tblink" target="_blank" variant="primary" size="sm">前 往</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
  import selectionData from './selectionData'

  export default {
    name: 'selection',
    data() {
      return {
        selectionData
      }
    }
  }
</script>

<style lang="scss" scoped>
    .selection {
        margin: 0 auto;
        width: 1200px;

        .title {
            text-align: center;
            font-size: 32px;
            margin: 24px 0;
        }

        .selction-container {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            box-sizing: border-box;
            justify-content: space-between;

            .selection-item {
                width: 384px;
            }
        }
    }
</style>