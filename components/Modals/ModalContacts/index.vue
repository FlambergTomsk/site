<template>
  <modal-box
    :is-header="false"
  >
    <div class="contacts">
      <div class="contacts__content">
        <div class="contacts__title">
          {{ $t("portfolio.contacts.contactsTitle") }}
        </div>
        <div class="contacts__line" />
        <div class="contacts__subtitle">
          {{ $t("portfolio.contacts.desc") }}
        </div>
        <br>
        <div class="contacts__subtitle">
          {{ $t("portfolio.contacts.hope") }}
        </div>
        <div class="contacts__wrapper">
          <div class="contacts__item">
            {{ $t("portfolio.contacts.phone") }}
          </div>
          <div class="contacts__number">
            {{ $t("portfolio.contacts.phoneField") }}
          </div>
          <div class="contacts__item">
            {{ $t("portfolio.contacts.email") }}
          </div>
          <div class="contacts__number">
            {{ $t("portfolio.contacts.emailField") }}
          </div>
          <div class="contacts__item">
            {{ $t("portfolio.contacts.telegram") }}
          </div>

          <div class="contacts__number">
            {{ $t("portfolio.contacts.telegramField") }}
          </div>
        </div>
        <custom-button
          mode="yellow"
          class="contacts__button"
          @click="CloseModal"
        >
          {{ $t("portfolio.contacts.niceDay") }}
        </custom-button>
      </div>
    </div>
  </modal-box>
</template>

<script>

export default {
  name: 'Contacts',
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.contacts{
  max-width: 1500px;
  &__content{
    margin: 0 auto;
    padding: 40px;
  }
  &__title{
    @include text-title;
  }
  &__line{
    @include line;
    margin-bottom: 20px;
  }
  &__subtitle{
    @include text-subtitle;
    margin: 0 auto 0px;
  }
  &__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px auto;
    grid-gap: 10px;
  }
  &__item{
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
  }
  &__number{
    font-size: 14px;
    font-weight: 600;
    justify-self: right;
   }
  &__button{
    max-width: 250px;
    margin: 0 auto;
  }
}
@include _480{
  .contacts{
    &__content{
      padding:40px 10px;
    }
    &__wrapper{
      grid-template-columns: 1fr;
    }
  }
}
</style>
