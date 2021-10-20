<template>
  <div class="portfolio">
    <div class="portfolio__content">
      <div
        id="about"
        class="portfolio__about"
      >
        <About />
      </div>
      <div
        id="skills"
        class="portfolio__skills"
      >
        <Skills />
      </div>
      <div
        id="portfolio"
        class="portfolio__work"
      >
        <Work />
      </div>
    </div>
  </div>
</template>
<script>
import About from '~/components/widgets/Portfolio/About';
import Skills from '~/components/widgets/Portfolio/Skills';
import Work from '~/components/widgets/Portfolio/Work';

export default {
  components: {
    About, Skills, Work,
  },
};
</script>

<style lang="scss" scoped>
.portfolio{
  color: #070707;
  font-family: $Roboto;
}
</style>
