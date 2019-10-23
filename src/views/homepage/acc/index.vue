<template>
    <div class="acc">
        <p class="title">配饰</p>
        <div class="acc-container">
            <div class="img-container">
                <img class="img" :src="accData.src" alt="">
            </div>
            <div class="text-container">
                <span class="text">{{accData.text}}</span>
                <div class="link">
                    <b-button class="button" :href="accData.tblink" target="_blank" variant="primary" size="sm">前 往
                    </b-button>
                    <b-button class="button" href="/acc" size="sm" variant="primary">探索更多</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import accData from './accData'

  export default {
    name: 'acc',
    data() {
      return {
        accData
      }
    }
  }
</script>

<style lang="scss" scoped>
    .acc {
        margin: 0 auto;
        width: 1200px;

        .title {
            text-align: center;
            font-size: 32px;
            margin: 40px 0;
        }

        .acc-container {
            display: flex;
            flex-direction: row;
            border: 1px solid rgba(0, 0, 0, .125);

            .img-container, .text-container {
                flex: 1;
                box-sizing: border-box;
            }

            .img-container {
                overflow: hidden;

                .img {
                    display: block;
                    vertical-align: top;
                    width: 100%;
                    transition: ease .3s;

                    &:hover {
                        transform: scale(1.1, 1.1);
                    }
                }
            }

            .text-container {
                display: flex;
                flex-direction: column;
                justify-content: center;

                .text {
                    padding: 0 24px;
                    font-size: 32px;
                    font-weight: bold;
                    color: rgba(0, 0, 0, .7);
                    text-align: center;
                    line-height: 48px;
                }

                .link {
                    height: 48px;
                    line-height: 48px;
                    text-align: center;

                    .button {
                        margin: 0 8px;
                    }
                }
            }
        }
    }
</style>