<template>
  <div
    id="home"
    class="header"
  >
    <div class="header__content content">
      <div class="content__menu menu">
        <div class="menu__links">
          <div
            v-for="(item, j) in panel"
            :key="`item-${item}-${j}`"
            class="menu__item"
          >
            <a
              :href="item.link"
              class="menu__element"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div
          v-if="isOpenSideBar"
          class="content__sidebar sidebar"
        >
          <div class="sidebar__body">
            <div class="sidebar__top">
              <a class="sidebar__close">
                <img
                  src="~/static/close.svg"
                  alt="Close"
                  class="sidebar__btn"
                  @click="toggleMenu"
                >
              </a>
            </div>
            <div class="sidebar__links">
              <div
                v-for="(item, j) in panel"
                :key="`item-${item}-${j}`"
                class="sidebar__item"
              >
                <a
                  :href="item.link"
                  class="sidebar__link"
                  @click="toggleMenu"
                >
                  {{ item.title }}
                </a>
              </div>
            </div>
            <div class="sidebar__control">
              <span
                class="sidebar__language"
                :class="{'sidebar__language_active': currentLocale === 'ru'}"
                @click="$i18n.setLocale('ru')"
              >
                {{ $t("portfolio.header.languageRU") }}
              </span>
              <span class="sidebar__space" />
              <span
                class="sidebar__language"
                :class="{'sidebar__language_active': currentLocale === 'en'}"
                @click="$i18n.setLocale('en')"
              >
                {{ $t("portfolio.header.languageENG") }}
              </span>
            </div>
          </div>
        </div>
      </transition>
      <div class="content__panel panel">
        <transition name="fade">
          <div class="panel__round">
            <img
              src="~/static/burger.svg"
              alt="Panel"
              class="content__burger"
              @click="toggleMenu"
            >
          </div>
        </transition>
        <div class="panel__name">
          {{ $t("portfolio.header.name") }}
          {{ $t("portfolio.header.surname") }}
        </div>
        <div class="panel__age">
          {{ $t("portfolio.header.developer") }}
          <br>
          {{ $t("portfolio.header.age") }}
        </div>
        <div class="panel__control">
          <span
            class="panel__language"
            :class="{'panel__language_active': currentLocale === 'ru'}"
            @click="$i18n.setLocale('ru')"
          >
            {{ $t("portfolio.header.languageRU") }}
          </span>
          <span class="panel__space" />
          <span
            class="panel__language"
            :class="{'panel__language_active': currentLocale === 'en'}"
            @click="$i18n.setLocale('en')"
          >
            {{ $t("portfolio.header.languageENG") }}
          </span>
        </div>
      </div>
      <img
        src="~/static/moe.png"
        alt="Author photo"
        class="content__photo"
      >
      <img
        src="~/static/moeMobile.png"
        alt="Author photo"
        class="content__photo content__photo_mobile"
      >
    </div>
    <div class="content__up up">
      <a
        href="#home"
        class="up__link"
      >
        <div class="icon-chevron-up up__icon" />
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      isOpenSideBar: false,
    };
  },
  computed: {
    panel() {
      return [
        {
          title: this.$t('portfolio.header.home'),
          link: '#home',
        },
        {
          title: this.$t('portfolio.header.aboutMe'),
          link: '#about',
        },
        {
          title: this.$t('portfolio.header.skills'),
          link: '#skills',
        },
        {
          title: this.$t('portfolio.header.portfolio'),
          link: '#portfolio',
        },
        {
          title: this.$t('portfolio.header.contacts'),
          link: '#footer',
        },
      ];
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isOpenSideBar = !this.isOpenSideBar;
    },
    handleScroll() {
      const obj = document.querySelector('.menu');
      if (window.pageYOffset > 100) {
        obj.classList.add('menu_fixed');
      } else {
        obj.classList.remove('menu_fixed');
      }
      const burger = document.querySelector('.panel__round');
      if (window.pageYOffset > 100) {
        burger.classList.add('panel__round_fixed');
      } else {
        burger.classList.remove('panel__round_fixed');
      }
      const language = document.querySelector('.panel__control');
      if (window.pageYOffset > 200) {
        language.classList.add('panel__control_fixed');
      } else {
        language.classList.remove('panel__control_fixed');
      }
      const button = document.querySelector('.up');
      if (window.pageYOffset > 500) {
        button.classList.add('up_fixed');
      } else {
        button.classList.remove('up_fixed');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  &__content{
    padding: 0 20px 104px;
    max-width: 946px;
    margin: 0 auto;
  }
}
.content{
  &__menu{
    padding-bottom: 32px;
    border-bottom: 1px solid $black;
    margin-bottom: 40px;
  }
  &__panel{
    margin-bottom: 50px;
  }
  &__burger{
    display: none;
  }
  &__photo{
    margin: 0 auto;
    &_mobile{
      display: none;
      margin: 0 auto;
    }
  }
  &__sidebar{
    padding: 66px 26px;
  }
}
.menu{
  &_fixed{
    position: fixed;
    max-height: 50px;
    margin: 0 auto;
    width: 100%;
    max-width: 906px;
    background-color: $white;
    border-radius: 0 0 25px 25px;
    animation-duration: 1s;
    border: 1px solid $black;
    border-top: none;
    animation-name: show_header;
    .menu{
      &__links{
        margin-top: 0;
         padding: 10px;
      }
    }
  }
  &__links{
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
  }
  &__element{
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: 700;
    color:$black;
    opacity: 0.7;
    text-decoration: none;
    text-shadow: $black 0 0 0.5px, $black 0px 0 0.5px,
    $black 0 0.5px 0, $black 0 -0.5px 0;
    transition: 0.3s;
    &:hover{
      color: $yellow;
      border-bottom: 2px solid $black;
      opacity: 1;
    }
  }
}
.panel{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  &__round{
    align-self: flex-end;
    &_fixed{
      display: none;
      position: fixed;
      width: 62px;
      height: 62px;
      background-color: $blue;
      border-radius: 50%;
      right: 10px;
      top: 20px;
      padding: 15px;
      transition: 1s;
    }
  }
  &__space{
    height: 20px;
    border-right: 3px solid $black;
    margin: 0 10px;
  }
  &__name{
    font-size: 47px;
    line-height: 59px;
    letter-spacing: 0em;
    max-width: 270px;
    font-weight: 700;
    margin-bottom: -10px;
    margin-right: 20px;
  }
  &__age{
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    font-weight: 500;
    max-width: 160px;
    margin-bottom: -5px;
  }
  &__control{
    transform: rotate(-90deg);
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0em;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    z-index: 0;
    &_fixed{
      position: fixed;
      transform: rotate(0);
      background-color: $blue;
      border-radius: 50%;
      top: 60px;
      padding: 15px;
      transition: 1s;
      z-index: 2000;
    }
  }
  &__language{
    cursor: pointer;
    &_active{
        font-size: 20px;
        color: $yellow;
        font-weight: 900;
      }
  }
}
.up{
  background-color: $blue;
  position: fixed;
  top: 80%;
  right: 5%;
  border-radius: 50%;
  z-index: 200;
  border: 1px solid $black;
  transition: 1s;
  opacity: 0;
  &_fixed{
   opacity: 1;
  }
  &:hover .up__icon{
    opacity: 1;
  }
  &__icon{
    color: $black;
    opacity: 0.5;
    width: 62px;
    height: 62px;
    padding: 23px 20px 10px 23px;
  }
  &__link{
    text-decoration: none;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  background: white;
  z-index: 999000;
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__space{
    height: 20px;
    border-right: 3px solid $black;
    margin: 0 10px;
  }
  &__btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 80px;
    right: 30px;
    opacity: 0.5;
    transition: 0.5s;
    &:hover{
      opacity: 1;
    }
  }
  &__links {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-gap: 68px;
  }
  &__link {
    text-decoration: none;
    font-size: 34px;
    line-height: 42px;
    letter-spacing: 0em;
    font-weight: 700;
    color: $black;
    opacity: 0.5;
    transition: 0.5s;
    &:hover{
      opacity: 1;
    }
  }
  &__control{
    transform: rotate(90deg);
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 0em;
    font-weight: 700;
    white-space: nowrap;
    z-index: 0;
    margin-right: auto;
    position: absolute;
    top: 80%;
    right: -25px;
  }
  &__language{
    &_active{
      font-size: 30px;
      color: $yellow;
      font-weight: 900;
    }
  }

}
.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
@include _991{
  .menu{
    &_fixed{
      right: 0;
      left: 0;
    }
  }
}
@include _480{
  .content{
    &__burger{
      display: inline;
      margin-left: auto;
      margin-right: 0;
    }
    &__panel{
      flex-direction: column;
      align-items: flex-start;
      margin-top: 32px;
      margin-bottom: 0;
    }
    &__menu{
      display: none;
    }
    &__photo{
      display: none;
      &_mobile{
        display: block;
      }
    }
  }
  .panel{
    &__round{
      display: block;
    }
    &__menu{
      display: none;
    }
    &__age{
      max-width: 250px;
    }
    &__name{
      margin-bottom: 23px;
      margin-top: -45px;
    }
    &__control{
      opacity: 0;
      &_fixed{
        display: block;
        transform: rotate(0);
        transition: 1s;
        z-index: 2000;
        opacity: 1;
      }
    }
  }
}
@keyframes show_header {
  0%{
    opacity: 0;
    top: -70px
  }
  100%{
    opacity: 1;
    top:0;
  }
}
</style>
