import Vue from 'vue';

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  setInteractionMode,
} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
setInteractionMode('eager');

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
  });
});

export default ({ app }) => {
  configure({
    defaultMessage: (_field_, values) => app.i18n.t(`messages.${values._rule_}`, values),
  });
};
extend('phone', {
  validate(value) {
    const regex = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
    return {
      required: true,
      valid: regex.test(value),
    };
  },
  message: 'Please enter correct {_field_}',
});
extend('date', {
  validate(value) {
    const regex = /^[0-9]{1,2}\/[0-9]{1,2}/;
    return {
      required: true,
      valid: regex.test(value),
    };
  },
  message: 'Please enter correct {_field_}',
});
