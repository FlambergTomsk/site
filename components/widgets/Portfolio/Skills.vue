<template>
  <div class="skills">
    <div class="skills__content">
      <div class="skills__title">
        {{ $t("portfolio.skills.skillsTitle") }}
      </div>
      <div class="skills__subtitle">
        {{ $t("portfolio.skills.iWorkInSuchPrograms") }}
      </div>
      <div class="skills__programs programs">
        <div
          v-for="(item, index) in programs"
          :key="index"
          class="programs__item item"
        >
          <img
            :src="item.avatar"
            alt="Skill avatar"
            :class="item.class"
          >
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
            class="item__description description"
            @click="openDescription(item.id)"
          >
            <div
              class="description__title"
            >
              {{ $t("portfolio.skills.descriptionTitle") }}
              <div
                class="icon-chevron-down description__arrow"
                :class="{'description__arrow_up': item.isDescription}"
              />
            </div>
            <b-collapse :visible="item.isDescription">
              <div
                class="description__text"
              >
                {{ item.description }}
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
  name: 'Skills',
  data() {
    return {
      openId: [],
    };
  },
  computed: {
    programs() {
      const initPrograms = [
        {
          title: this.$t('portfolio.skills.javaScript'),
          avatar: require('~/static/js.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.javaScript'),
          isDescription: false,
          id: 1,
        },
        {
          title: this.$t('portfolio.skills.css'),
          avatar: require('~/static/css.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.css'),
          isDescription: false,
          id: 2,
        },
        {
          title: this.$t('portfolio.skills.scss'),
          avatar: require('~/static/cass.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.scss'),
          isDescription: false,
          id: 3,
        },
        {
          title: this.$t('portfolio.skills.html'),
          avatar: require('~/static/html.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.html'),
          isDescription: false,
          id: 4,
        },
        {
          title: this.$t('portfolio.skills.vue'),
          avatar: require('~/static/vue.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.vue'),
          isDescription: false,
          id: 5,
        },
        {
          title: this.$t('portfolio.skills.bootstrapVue'),
          avatar: require('~/static/bootstrap.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.bootstrap'),
          isDescription: false,
          id: 6,
        },
        {
          title: this.$t('portfolio.skills.git'),
          avatar: require('~/static/github.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.git'),
          isDescription: false,
          id: 7,
        },
        {
          title: this.$t('portfolio.skills.nuxt'),
          avatar: require('~/static/nuxt.svg'),
          class: 'item__avatar',
          description: this.$t('portfolio.skills.description.nuxt'),
          isDescription: false,
          id: 8,
        },
        {
          title: this.$t('portfolio.skills.figma'),
          avatar: require('~/static/figma.svg'),
          class: 'item__avatar item__avatar_big ',
          description: this.$t('portfolio.skills.description.figma'),
          isDescription: false,
          id: 9,
        },
      ];
      return initPrograms.map((item) => {
        item.isDescription = this.openId.includes(item.id);
        return item;
      });
    },
  },
  methods: {
    openDescription(id) {
      if (this.openId.includes(id)) {
        this.openId = this.openId.filter((item) => item !== id);
      } else {
        this.openId.push(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.skills{
  &__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 91px 0 110px;
    max-width: 950px;
    margin: 0 auto;
  }
  &__title{
    font-size: 34px;
    line-height: 42px;
    letter-spacing: 0em;
    font-weight: 700;
  }
  &__subtitle{
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0em;
    margin: 40px 0 60px;
    font-weight: 500;
  }
}
.programs{
  display: grid;
  grid-template-columns: repeat(3, minmax(200px,300px));
  gap: 90px;
  align-items: start;
}
.item{
  display: flex;
  flex-direction: column;
  &__title{
    max-width: 80px;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0em;
    align-self: flex-end;
    text-align: center;
    margin: 20px auto;
    font-weight: 500;

  }
  &__avatar{
    margin: 0 auto;
    max-width: 150px;
    flex: 1 1 170px;
    &_big{
      min-width: 100px;
    }
  }
}
.description{
  cursor: pointer;
  &__title{
    text-align: center;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 0em;
    font-weight: 700;
    margin-bottom: 20px;
    transition: 0.3s;
    &:hover{
      font-weight: 900;
      text-shadow: $red 0 0 0.2px, $red 0px 0 0.2px,
      $red 0 0.2px 0, $red 0 -0.2px 0;
    }
  }
  &__text{
    text-align: left;
    font-size: 16px;
  }
  &__arrow{
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
    transition: 0.3s;
    &_up{
      transform: rotate(180deg);
    }
  }
}
@include _991{
  .skills{
    &__content{
      padding: 91px 20px 110px;
    }
  }
}
@include _767{
  .programs{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@include _480{
  .programs{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
