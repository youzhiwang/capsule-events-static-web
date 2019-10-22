<template>
    <div class="animation-title" :class="{'animate': isAnimate}">
        <slot>
            <span>CAPSULE EVENTS</span>
        </slot>
    </div>
</template>

<script>
  export default {
    name: 'AnimationTitle',
    data() {
      return {
        isAnimate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
    .animation-title {
        font-size: 40px;
        padding: 40px;
        text-align: center;
        background-color: rgba(0, 0, 0, .8);
        color: rgba(255, 255, 255, .8);

        &.animate {
            animation: colorAnimation ease 2s;
        }
    }

    @keyframes colorAnimation {
        from {
            background-color: rgba(255, 255, 255, .8);
            color: rgba(0, 0, 0, 0);
        }
        to {
            background-color: rgba(0, 0, 0, .8);
            color: rgba(255, 255, 255, .8);
        }
    }
</style>