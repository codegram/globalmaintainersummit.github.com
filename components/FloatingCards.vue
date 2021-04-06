<template>
  <div class="floating">
    <div class="floating__wrapper">
      <FloatingCard
        v-for="project in slicedProjects(3)"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    slicedProjects(limit) {
      // Limit the content lenght to display only an specific amount of cards.
      return this.content.slice(0, limit)
    },
  },
}
</script>

<style lang="scss" scoped>
.floating {
  display: none;
  @media screen and (min-width: $screen-xl) {
    position: relative;
    display: block;
  }
  &__wrapper {
    --position-y: -100px;

    position: absolute;
    top: var(--position-y);
    right: 0;
    width: 100%;
    height: 400px;
    transition: top 0.25s ease;
    .card {
      position: absolute;
      &:nth-child(1) {
        top: -180px;
        right: calc(100vw * 0.12);
      }
      &:nth-child(2) {
        top: 260px;
        right: calc(100vw * 0.075);
      }
      &:nth-child(3) {
        top: 100px;
        right: calc(100vw * -0.1);
      }
    }
  }
}
</style>
