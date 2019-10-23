<template>
    <div class="top-bar">
        <div class="top-bar-main">
            <router-link :to="{name: 'homepage'}" @click.native="closeSubTopBar">
                <img class="logo" :src="logo" alt="CAPSULE EVENTS">
            </router-link>
            <icon class="icon" name="align-justify" @click.native="showSubTopBar"></icon>
            <div class="blank"></div>
            <!-- <span class="language" @click.native="handleLanguageChange">English</span> -->
        </div>
        <div class="sub-top-bar" :class="{'hidden': isHidden}">
            <router-link class="link" :to="{name: 'bags'}" @click.native="showSubTopBar">包袋</router-link>
            <span class="divider">/</span>
            <router-link class="link" :to="{name: 'home'}" @click.native="showSubTopBar">家居</router-link>
            <span class="divider">/</span>
            <router-link class="link" :to="{name: 'acc'}" @click.native="showSubTopBar">配饰</router-link>
            <span class="divider">/</span>
            <router-link class="link" :to="{name: 'clothes'}" @click.native="showSubTopBar">服饰</router-link>
            <span class="divider">/</span>
            <router-link class="link" :to="{name: 'shoes'}" @click.native="showSubTopBar">鞋饰</router-link>
        </div>
    </div>
</template>

<script>
  import logo from '../../assets/capsule-events-logo.png'

  export default {
    name: 'TopBar',
    data() {
      return {
        logo, // logo
        isHidden: true

      }
    },
    methods: {
      showSubTopBar() {
        this.isHidden = !this.isHidden
      },
      closeSubTopBar() {
        this.isHidden = true
      },
      // 切换语言
      handleLanguageChange() {

      }
    }
  }
</script>

<style lang="scss" scoped>
    .top-bar-main {
        height: 60px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;

        .logo {
            height: 60px;
            cursor: pointer;
        }

        .icon {
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        .blank {
            flex: 1;
        }

        .language {
            font-size: 12px;
            padding: 0 24px;
            cursor: pointer;
        }
    }

    .sub-top-bar {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        background-color: rgba(0, 0, 0, .02);
        display: flex;
        flex-direction: row;
        justify-items: center;
        justify-content: center;
        align-items: center;
        transition: ease .3s;

        &.hidden {
            height: 0;
            overflow: hidden;
            border-bottom: none;
        }

        .link {
            text-decoration: none;
            color: rgba(0, 0, 0, .6);
            transition: ease .3s;
            font-size: 12px;

            &:hover {
                color: rgba(0, 0, 0, .9)
            }
        }

        .divider {
            margin: 0 16px;
            color: rgba(0, 0, 0, .7);
        }
    }
</style>