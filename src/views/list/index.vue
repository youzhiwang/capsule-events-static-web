<template>
    <div class="list">
        <div class="animation-title-wrapper">
            <animation-title v-if="isShowAnimationTitle">
                <template v-if="$route.name === 'bags'" name='default'>
                    <span>每一款包袋，都别出心裁</span>
                </template>
                <template v-if="$route.name === 'home'" name='default'>
                    <span>特立独行，样样都好</span>
                </template>
                <template v-if="$route.name === 'acc'" name='default'>
                    <span>致知在格物，物格而后知至</span>
                </template>
                <template v-if="$route.name === 'clothes'" name='default'>
                    <span>人靠衣装</span>
                </template>
                <template v-if="$route.name === 'shoes'" name='default'>
                    <span>千里之行，始于足下</span>
                </template>
            </animation-title>
        </div>
        <div class="operation">
            <div class="item">
                <div class="control">
                    <b-form-input v-model="keywords" size="sm" placeholder="关键字"
                                  @keypress.enter.native="handleSearch"></b-form-input>
                </div>
                <div class="button">
                    <b-button size="sm" variant="primary" @click="handleSearch">搜 索</b-button>
                </div>
            </div>
        </div>
        <b-row class="bag-container">
            <b-col cols="4" v-for="(item, index) in showData" :key="index" class="item">
                <b-card :img-src="item.src"
                        img-alt="Image"
                        img-top
                        tag="article">
                    <b-card-text>{{item.text}}</b-card-text>
                    <b-button :href="item.tblink" variant="primary" size="sm" target="_blank">前 往</b-button>
                </b-card>
            </b-col>
            <div v-if="showData.length === 0" class="tips">
                抱歉，未找到任何结果。
            </div>
        </b-row>
    </div>
</template>

<script>
  import AnimationTitle from '@/components/AnimationTitle'
  import bagData from './bagData'
  import homeData from './homeData'
  import accData from './accData'
  import clothesData from './clothesData'
  import shoesData from './shoesData'

  export default {
    name: 'bag',
    components: {AnimationTitle},
    data() {
      return {
        bagData, // 包袋
        homeData, // 家居
        accData, // 配饰
        clothesData, // 服饰
        shoesData, // 鞋饰
        listData: [],
        showData: [],
        keywords: '',
        isShowAnimationTitle: true
      }
    },
    methods: {
      handleSearch() {
        let list = []
        this.listData.forEach(item => {
          if (item.text.indexOf(this.keywords) !== -1) list.push(item)
        })
        this.showData = list
      },
      // 根据路由名称，设置对应的静态数据
      setData() {
        this.redrawAnimation()
        this.keywords = ''
        const name = this.$route.name
        switch (name) {
          case 'bags':
            this.listData = JSON.parse(JSON.stringify(this.bagData))
            this.showData = JSON.parse(JSON.stringify(this.bagData))
            break
          case 'home':
            this.listData = JSON.parse(JSON.stringify(this.homeData))
            this.showData = JSON.parse(JSON.stringify(this.homeData))
            break
          case 'acc':
            this.listData = JSON.parse(JSON.stringify(this.accData))
            this.showData = JSON.parse(JSON.stringify(this.accData))
            break
          case 'clothes':
            this.listData = JSON.parse(JSON.stringify(this.clothesData))
            this.showData = JSON.parse(JSON.stringify(this.clothesData))
            break
          case 'shoes':
            this.listData = JSON.parse(JSON.stringify(this.shoesData))
            this.showData = JSON.parse(JSON.stringify(this.shoesData))
            break
          default:
            break
        }
      },
      // 重绘 animation-title 组件，触发动画
      redrawAnimation() {
        this.isShowAnimationTitle = false
        setTimeout(() => {
          this.isShowAnimationTitle = true
        }, 100)
      }
    },
    watch: {
      '$route'(newValue, oldValue) {
        if (newValue.name !== oldValue.name) {
          this.setData()
        }
      }
    },
    mounted() {
      this.setData()
    }
  }
</script>

<style lang="scss" scoped>
    .list {
        min-height: calc(100% - 60px);

        .animation-title-wrapper {
            min-height: 140px;
        }

        .operation {
            height: 60px;
            border-bottom: 1px solid rgba(0, 0, 0, .125);
            margin-bottom: 24px;
            padding: 0 24px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            .item {
                width: 200px;
                display: flex;
                flex-direction: row;

                .control {
                    padding: 14px 8px 0 4px;
                    flex: 1;
                }

                .button {
                    padding: 14px 8px 0 0;
                }
            }
        }

        .bag-container {
            width: 1200px;
            margin: 0 auto;

            .item {
                width: 384px;
                margin-bottom: 24px;
            }

            .tips {
                font-size: 32px;
            }
        }
    }
</style>