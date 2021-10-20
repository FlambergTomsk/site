<template>
  <div>
    <div
      v-click-outside="closeWindow"
      class="drop"
    >
      <button
        class="drop__btn"
        @click="isShown = !isShown"
      >
        <span
          v-if="items[value]"
          class="drop__title"
        >
          {{ items[value] }}
        </span>
        <span
          v-else-if="!items[value] && placeholder"
          class="drop__placeholder"
        >
          {{ placeholder }}
        </span>
        <slot name="card" />
        <span
          class="icon-chevron-down drop__icon"
          :class="{'drop__icon_up': isShown}"
        />
      </button>
      <transition name="fade">
        <div
          v-if="isShown"
          class="drop__items"
        >
          <button
            v-for="(item, i) in items"
            :key="`drop__item-${i}`"
            class="drop__item"
            @click="selectItem(i)"
          >
            {{ item }}
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Drop',
  directives: {
    ClickOutside,
  },
  props: {
    items: {
      type: [Array, Object],
      default: () => [],
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    mode: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isShown: false,
  }),
  methods: {
    closeWindow() {
      this.isShown = false;
    },
    selectItem(i) {
      this.isShown = false;
      this.$emit('input', i);
    },
  },
};
</script>

<style scoped lang="scss">
.drop {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  min-width: 131px;
  position: relative;
  text-align: left;
  color: black;
  &__placeholder{
    color: $lightGrey;
    opacity: 0.5;
    line-height: 19px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
  }
  &__icon{
    opacity: 0.3;
    transition: 0.2s;
    &:hover{
      opacity: 1;
    }
    &_up{
      transform: rotate(180deg);
    }
  }
  &__title{
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
  }
  &__items {
    width: 100%;
    position: absolute;
    background: $white;
    top: calc(100% + 4px);
    display: grid;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 15px;
    padding: 15px 20px;
    z-index: 1;
    border-radius: 5px;
    border: 1px solid $red;

  }
  &__item {
    text-align: left;
    width: 100%;
    min-height: 21px;
    transition: 0.2s;
    &:hover {
      font-weight: 900;
      background-color: $white;
    }
  }
  &__btn {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 23px;
    width: 100%;
    background: $grey;
    border-radius: 5px;
    transition: 1s;
    border: 1px solid $grey;

    &:hover{
      background-color: $white;
      border: 1px solid $red;
    }
    &:focus{
      background-color: $white;
      border: 1px solid $red;
    }
  }
}

</style>
