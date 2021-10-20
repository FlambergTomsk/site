<template>
  <button
    class="custom-button"
    :class="changeClass"
    type="submit"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: '',
    },
  },
  computed: {
    changeClass() {
      const { mode } = this;
      return [
        { 'custom-button_yellow': mode === 'yellow' },
        { 'custom-button_clear': mode === 'clear' },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-button {
  padding: 0 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: $white;
  &:hover {
    color: $white;
    background: $pink;
  }
  &_yellow{
    background-color: $yellow;
    border-radius: 5px;
    transition: 0.5s;
    &:hover {
      background-color: $white;
      color: $yellow;
      border: 1px solid  $yellow;
    }
  }
  &_clear{
    background-color: transparent;
    border-radius: 5px;
    transition: 0.5s;
    border: 1px solid  $white;
    &:hover {
      background-color: $white;
      color: $yellow;
      border: 1px solid  $yellow;
    }
  }
}
</style>
