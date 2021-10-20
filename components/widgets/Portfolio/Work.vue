<template>
  <div class="work">
    <div class="work__content content">
      <div class="content__title">
        {{ $t("portfolio.work.portfolioTitle") }}
      </div>
      <img
        src="~/static/example.png"
        alt="Hunger page"
        class="content__page"
      >
      <div class="content__link">
        <a
          class="content__address"
          href="https://flambergtomsk.github.io/portfolio/"
          target="”_blank”"
        >
          {{ $t("portfolio.work.hunger") }}
        </a>
        <div class="icon-chevron-left content__arrow" />
        <div class="content__invitation">
          {{ $t("portfolio.work.link") }}
        </div>
      </div>
      <div class="content__description description">
        <div class="description__title">
          {{ $t("portfolio.work.descriptionTitle") }}
        </div>
        <div class="description__text">
          {{ $t("portfolio.work.desc") }}
        </div>
        <div class="description__wrapper">
          <div class="description__code code">
            <div
              class="code__title"
              @click="openCodeFeatures"
            >
              {{ $t("portfolio.work.codeTitle") }}
              <div
                class="icon-chevron-down code__arrow"
                :class="{'code__arrow_up': isCodeOpen}"
              />
            </div>
            <b-collapse :visible="isCodeOpen">
              <div class="code__text">
                <div
                  v-for="(item, j) in code"
                  :key="`item-${item}-${j}`"
                  class="code__array"
                >
                  <div class="code__item">
                    {{ item.title }}
                  </div>
                  <img
                    :src="item.picture"
                    alt="Code"
                    class="code__pictures"
                  >
                </div>
              </div>
            </b-collapse>
          </div>
          <div class="description__code code">
            <div
              class="code__title"
              @click="openStyleFeatures"
            >
              {{ $t("portfolio.work.styleTitle") }}
              <div
                class="icon-chevron-down code__arrow"
                :class="{'code__arrow_up': isStyleOpen}"
              />
            </div>
            <b-collapse :visible="isStyleOpen">
              <div class="code__text">
                <div
                  v-for="(item, j) in style"
                  :key="`item-${item}-${j}`"
                  class="code__array"
                >
                  <div class="code__item">
                    {{ item.title }}
                  </div>
                  <img
                    :src="item.picture"
                    alt="Styles"
                    class="code__pictures"
                  >
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      isCodeOpen: false,
      isStyleOpen: false,
    };
  },
  computed: {
    code() {
      return [
        {
          title: this.$t('portfolio.work.languagePanel'),
          picture: require('~/static/language.svg'),
        },
        {
          title: this.$t('portfolio.work.validation'),
          picture: require('~/static/validation.svg'),
        },
        {
          title: this.$t('portfolio.work.basicPattern'),
          picture: require('~/static/pattern.svg'),
        },
        {
          title: this.$t('portfolio.work.components'),
          picture: require('~/static/components.svg'),
        },
        {
          title: this.$t('portfolio.work.customAndPopup'),
          picture: require('~/static/custom.svg'),
        },
      ];
    },
    style() {
      return [
        {
          title: this.$t('portfolio.work.fixed'),
          picture: require('~/static/fixed.svg'),
        },
        {
          title: this.$t('portfolio.work.adaptive'),
          picture: require('~/static/adaptive.svg'),
        },
        {
          title: this.$t('portfolio.work.animation'),
          picture: require('~/static/animation.svg'),
        },
        {
          title: this.$t('portfolio.work.mixins'),
          picture: require('~/static/mixins.svg'),
        },
        {
          title: this.$t('portfolio.work.bem'),
          picture: require('~/static/bem.svg'),
        },
      ];
    },
  },
  methods: {
    openCodeFeatures() {
      this.isCodeOpen = !this.isCodeOpen;
    },
    openStyleFeatures() {
      this.isStyleOpen = !this.isStyleOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.work{
  &__content{
    background-color: $grey;
    padding: 112px 20px 96px;
    text-align: center;
    color: $black;
  }
}
.content{
  &__invitation {
    display: inline-block;
  }
  &__arrow{
    margin: 0 20px;
  }
  &__link{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 45px 0 20px;
    }
  &__title{
    font-size: 34px;
    line-height: 42px;
    letter-spacing: 0em;
    font-weight: 700;
    margin-bottom: 47px;
    display: block;
  }
  &__page{
    margin: 0 auto;
  }
  &__address{
    text-decoration: none;
    color: $black;
    display: block;
    border-bottom: 1px solid $yellow;
    transition: 0.3s;
    &:hover{
      color: $yellow;
      border-bottom: 1px solid $black;
    }
  }
}
.description{
  max-width: 950px;
  margin: 0 auto;
  &__title{
    font-size: 24px;
    line-height: 42px;
    letter-spacing: 0em;
    font-weight: 700;
  }
  &__text{
    margin: 20px 0;
  }
}
.code{
 &__array{
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;
 }
 &__title{
   font-size: 20px;
   line-height: 42px;
   letter-spacing: 0em;
   font-weight: 700;
   cursor: pointer;
   display: inline-block;
   transition: 0.3s;
   color: $blackText;
   &:hover{
     font-weight: 900;
     text-shadow: $red 0 0 0.2px, $red 0px 0 0.2px,
     $red 0 0.2px 0, $red 0 -0.2px 0;
     color: $black;
     }
   }
  &__item{
    text-align: left;
    align-self: center;
    font-size: 20px;
  }
  &__pictures{
    margin: 20px auto;
    max-width: 350px;
  }
  &__arrow{
    transition: 0.3s;
    display: inline-block;
    margin-left:10px;

    &:hover{
      font-weight: 900;
      text-shadow: $red 0 0 0.2px, $red 0px 0 0.2px,
      $red 0 0.2px 0, $red 0 -0.2px 0;
      opacity: 1;
    }
    &_up{
      transform: rotate(180deg);
      position: relative;
      top: 5px;
    }
  }
 }
@include _767{
  .code{
    &__array{
      grid-template-columns: 1fr;
    }
  }
}
@include _380{
  .code{
    &__pictures{
      transition: 0.5s;
      max-width: 300px;
    }
  }
  .work{
    &__content{
      padding: 112px 5px 96px;
    }
  }
}
</style>
