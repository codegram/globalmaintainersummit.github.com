<template>
  <Component
    :is="type"
    :href="href !== null ? href : mailto !== null ? `mailto:${mailto}` : null"
    :to="to !== null ? to : null"
    :target="href !== null ? '_blank' : null"
    class="link"
    :class="button && 'button'"
    role="link"
    :tabindex="button ? 0 : null"
  >
    <span :class="!button && 'link__content'">
      <slot />
    </span>
  </Component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    mailto: {
      type: String,
      default: null,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      if (this.to !== null) {
        return 'nuxt-link'
      } else if (this.href !== null || this.mailto !== null) {
        return 'a'
      } else {
        return 'span'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  color: var(--fc-default);
  font-weight: var(--fw-medium);
  font-size: var(--fs-default);
  text-decoration: none;
  cursor: pointer;
  &__content {
    &::after {
      position: relative;
      top: 4px;
      display: block;
      width: 100%;
      height: 2px;
      margin: 0 auto;
      background-image: linear-gradient(
        90deg,
        var(--bg-gradient-start) 50%,
        var(--bg-gradient-end) 100%
      );
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease-in-out;
      content: '';
    }
    &:hover::after,
    &:focus::after {
      transform: scaleX(1);
    }
  }
}

.button {
  @include mobileToDesktopFontSize(var(--fs-small), var(--fs-default));

  padding: 16px 40px 20px;
  color: var(--fc-dark);
  font-weight: var(--fw-semi-bold);
  background: linear-gradient(
    119.72deg,
    var(--bg-gradient-start) 0%,
    var(--bg-gradient-end) 100%
  );
  background-size: 100%;
  border-radius: 8px;
  outline-offset: 4px;
  transition: background 0.75s linear;

  &:hover,
  &:focus {
    background-size: 250%;
  }
}
</style>
