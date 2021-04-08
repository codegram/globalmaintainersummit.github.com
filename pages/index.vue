<template>
  <main class="main">
    <section>
      <Hero />
      <FloatingCards :content="maintainers" />
      <Lead :content="lead" />
      <Details />
      <div class="cta">
        <CommonLink button :href="cta.url">
          {{ cta.label }}
        </CommonLink>
      </div>
      <Maintainers :content="maintainers" />
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const { lead, cta, maintainers } = await $content('home').fetch()

    return {
      lead,
      cta,
      maintainers,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
}
section {
  @include section();
}
.cta {
  margin-top: 88px;
}
</style>
