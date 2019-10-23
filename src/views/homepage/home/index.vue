<template>
    <div class="home">
        <p class="title">家居</p>
        <div class="home-container">
            <div v-for="(item, index) in homeData" :key="index" class="item">
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters>
                        <b-col cols="6">
                            <b-card-img :src="item.src" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col cols="6">
                            <b-card-body title="Horizontal Card">
                                <b-card-text>{{item.text}}</b-card-text>
                                <b-button variant="primary" size="sm">前 往</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="link-more">
            <b-button href="/home" size="sm" variant="primary">探索更多</b-button>
        </div>
    </div>
</template>

<script>
  import homeData from './homeData'

  export default {
    name: 'home',
    data() {
      return {
        homeData
      }
    }
  }
</script>

<style lang="scss" scoped>
    .home {
        width: 1200px;
        margin: 0 auto;

        .title {
            text-align: center;
            font-size: 32px;
            margin: 40px 0;
        }

        .home-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .item {
                width: 576px;
            }
        }

        .link-more {
            text-align: center;
            margin: 24px 0;
        }
    }
</style>