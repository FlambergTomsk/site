<template>
  <div
    id="footer"
    class="footer"
  >
    <div class="footer__content">
      <div class="footer__title">
        {{ $t("portfolio.footer.contacts") }}
      </div>
      <div class="footer__subtitle">
        {{ $t("portfolio.footer.wantToKnowMoreOrJustChart") }}
      </div>
      <div class="footer__subtitle">
        {{ $t("portfolio.footer.youAreWelcome") }}
      </div>
      <custom-button
        class="content__button"
        mode="yellow"
        @click="showContactsModal"
      >
        {{ $t("portfolio.footer.sendMessage") }}
      </custom-button>
      <div class="content__signature">
        {{ $t("portfolio.footer.likeMeOn") }}
      </div>
      <div class="content__signature">
        {{ $t("portfolio.footer.social") }}
      </div>
      <div class="content__social social">
        <a
          class="social__address"
          href="https://www.instagram.com/flambergtomsk/?r=nametag"
          target="”_blank”"
        >
          <span class="icon-instagram social__item" />
        </a>
        <a
          class="social__address"
          href="https://www.facebook.com/profile.php?id=100017338960684"
          target="”_blank”"
        >
          <span class="icon-facebook social__item" />
        </a>
        <a
          class="social__address"
          href="https://vk.com/id9417836"
          target="”_blank”"
        >
          <span class="icon-vk social__item" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import modals from '~/store/modals/modals';

export default {
  name: 'Footer',
  methods: {
    showContactsModal() {
      this.ShowModal({
        key: modals.contacts,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer{
  &__title{
    font-size: 34px;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__subtitle{
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    font-weight: 500;
  }
  &__content{
    padding: 114px 20px 123px;
  }
}
.content{
  &__button{
    margin: 40px auto;
    max-width: 250px;
  }
  &__signature{
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
    &:last-child{
      margin-top: 0;
    }
  }
}
.social{
  display: flex;
  max-width: 342px;
  margin: 0 auto;
  justify-content: space-between;
  &__item:before{
    font-size: 40px;
    color: black;
  }
  &__address{
    text-decoration: none;
  }
}
</style>
