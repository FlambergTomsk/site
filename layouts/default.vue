<template>
  <div
    class="page"
  >
    <div class="page__body body">
      <header-menu
        id="home"
        class="body__header"
      />
      <div class="body__content">
        <nuxt />
      </div>
      <footer-menu class="body__footer" />
    </div>
    <modal-container />
  </div>
</template>
<script>

import Footer from '~/components/widgets/Footer';
import Header from '~/components/widgets/Header';

export default {
  components: {
    'footer-menu': Footer,
    'header-menu': Header,
  },
};
</script>
<style lang="scss" scoped>

</style>
