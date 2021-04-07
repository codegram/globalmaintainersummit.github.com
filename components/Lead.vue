<template>
  <div>
    <div class="lead">
      <h2 class="lead__title">{{ content.title }}</h2>
      <CommonLink :href="calendarUrl">
        <span class="lead__dates">{{ content.dates }}</span>
        <AddToCalIcon />
      </CommonLink>
    </div>
  </div>
</template>

<script>
import AddToCalIcon from '~/assets/svg/add_to_cal.svg?inline'

export default {
  components: {
    AddToCalIcon,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      calendarUrl:
        'http://www.google.com/calendar/event?action=TEMPLATE&dates=20210608%2F20210610&text=Global%20Maintainer%20Event&&details=A%20virtual%20gathering%20for%20the%20maintainers%20that%20make%20open%20source%20possible',
    }
  },
}
</script>

<style lang="scss" scoped>
.lead {
  margin-top: 80px;
  @media screen and (min-width: $screen-ipad) {
    margin-top: 160px;
  }
  &__title {
    @include mobileToDesktopFontSize(var(--fs-medium), var(--fs-giant));
    @include gradientTitle(var(--bg-gradient-start), var(--bg-gradient-end));

    max-width: 1024px;
    margin-bottom: 0;
    color: var(--fc-default);
    font-weight: var(--fw-bold);
    line-height: 1;
  }

  &__dates {
    @include mobileToDesktopFontSize(var(--fs-regular), var(--fs-medium));

    display: inline-block;
    margin-top: 40px;
    margin-right: 16px;
    color: var(--fc-default);
    font-weight: var(--fw-medium);
    font-size: var(--fs-medium);
  }
}
</style>
