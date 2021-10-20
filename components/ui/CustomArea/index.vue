<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    class="custom-area"
    :rules="rules"
    :name="name"
    :vid="vid"
    mode="eager"
    slim
  >
    <div class="custom-area__body">
      <input
        v-if="isInput"
        class="custom-area__input"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        :autocomplete="autocomplete"
        @input="input"
        @blur="handleBlur"
      >
      <textarea
        v-if="isTextArea"
        class="custom-area__textarea"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        @blur="handleBlur"
        @input="input"
      />
    </div>
    <div
      v-if="!isHideError"
      class="custom-area__err"
    >
      {{ errors[0] }}
    </div>
  </validationprovider>
</template>
import Vue from 'vue';
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    isInput: {
      type: Boolean,
      default: false,
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    errorText: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isHideError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: '',
    },
    name: {
      type: String,
      description: 'Input name (used for validation)',
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  methods: {
    input($event) {
      this.$emit('input', $event.target.value, $event.target);
    },
    handleBlur($event) {
      this.$emit('input', $event.target.value);
    },
    handleCross() {
      this.$emit('input', '');
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-area {
  position: relative;
  &__body {
    display: flex;
    align-items: center;
    position: relative;
  }
  &__err {
    color: $red;
    font-size: 12px;
    min-height: 23px;
  }
  &__input {
    background: $grey;
    border-radius: 5px;
    border: 1px solid $clearGrey;
    padding: 0 23px;
    transition: .5s;
    width: 100%;
    color: $blackText;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 60px;
    max-width:100%;
    &::placeholder {
      color: $lightGrey;
      opacity: 0.5;
      line-height: 19px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      border-color:$red;
      background-color: $white;
    }
    &:visited{
    }
    &_indent {
      padding-left: 100px;
    }
  }
  &__textarea {
    background: $grey;
    border-radius: 5px;
    padding: 20px 23px;
    transition: .3s;
    width: 100%;
    color: $blackText;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 120px;
    justify-items: end;
    resize: none;
    border: 1px solid $grey;
    &::placeholder {
      color: $lightGrey;
      opacity: 0.5;
      line-height: 19px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      border: 1px solid $red;
      background-color: $white;
    }
    &_indent {
      padding-left: 100px;
    }
 }
}
@include _575 {
  .custom-area {
    &__left {
      padding-right: 10px;
    }
    &__err {
      min-height: 13px;
    }
  }
}

</style>
