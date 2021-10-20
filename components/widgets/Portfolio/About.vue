<template>
  <div class="about">
    <div class="about__title">
      {{ $t("portfolio.aboutMe") }}
    </div>
    <div class="about__text text">
      <div class="text__item">
        {{ $t("portfolio.about.hiText") }}
        <br class="text__break">
        {{ $t("portfolio.about.interestedText") }}
      </div>
      <div class="text__item text__item_medium">
        {{ $t("portfolio.about.studyingText") }}
        <br>
        {{ $t("portfolio.about.interfacesText") }}
      </div>
      <div class="text__item">
        {{ $t("portfolio.about.readyText") }}
        <br>
        {{ $t("portfolio.about.peopleText") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about{
  background: $grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 506px;
  justify-content: center;
  &__title{
    font-size: 34px;
    line-height: 42px;
    font-weight: 700;
    margin-bottom: 20px;
   }
  &__text{
  max-width: 485px;
  text-align: center;
  }
}
.text{
  &__item{
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    &_medium{
      margin: 40px 0;
    }
  }
}
@include _991{
  .about{
    padding: 0 30px;
  }
}
@include _480{
  .text{
    &__break{
      display: none;
    }
  }
}
</style>
