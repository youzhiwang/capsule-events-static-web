<template>
    <div class="bags">
        <p class="title">包袋</p>
        <div class="bag-container">
            <div class="left-container">
                <a v-if="bagData[0].tblink !== ''" :href="bagData[0].tblink" target="_blank">
                    <img :src="bagData[0].src" alt="">
                </a>
                <a v-else>
                    <img :src="bagData[0].src" alt="">
                </a>
            </div>
            <div class="right-container">
                <div class="right-top-container">
                    <a v-if="bagData[1].tblink !== ''" :href="bagData[1].tblink" target="_blank">
                        <img :src="bagData[1].src" alt="">
                    </a>
                    <a v-else>
                        <img :src="bagData[1].src" alt="">
                    </a>
                </div>
                <div class="right-bottom-container">
                    <a v-if="bagData[2].tblink !== ''" :href="bagData[2].tblink" target="_blank">
                        <img :src="bagData[2].src" alt="">
                    </a>
                    <a v-else>
                        <img :src="bagData[2].src" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="link-more">
            <b-button href="/bags" size="sm" variant="primary">探索更多</b-button>
        </div>
    </div>
</template>

<script>
  import bagData from './bagData'

  export default {
    name: 'bag',
    data() {
      return {
        bagData
      }
    }
  }
</script>

<style lang="scss" scoped>
    .bags {
        width: 1200px;
        margin: 0 auto;

        .title {
            text-align: center;
            font-size: 32px;
            margin: 40px 0;
        }

        .bag-container {
            display: flex;
            flex-direction: row;
            border: 1px solid rgba(0, 0, 0, 0.125);

            img {
                width: calc(100% - 48px);
                height: calc(100% - 48px);
                margin: 24px;

            }

            .left-container, .right-container {
                flex: 1
            }

            .left-container {
                border-right: 1px solid rgba(0, 0, 0, 0.125);
                justify-content: center;
                justify-items: center;
                align-items: center;
                overflow: hidden;
            }

            .right-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                justify-items: center;
                align-items: center;

                .right-top-container, .right-bottom-container {
                    flex: 1;
                    overflow: hidden;
                }

                .right-top-container {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                }

                .right-bottom-container {
                }
            }
        }

        .link-more {
            text-align: center;
            margin: 24px 0;
        }
    }
</style>