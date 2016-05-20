import Ember from 'ember';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

let Validations = buildValidations({
  options: [
    validator('collection', true),
    validator('length', {
      dependentKeys: ['options.[]'],
      min: 1
      // message: Ember.I18n.t('create.options.error.notEnoughOptions')
    }),
    validator('valid-collection', {
      dependentKeys: ['options.[]', 'options.@each.title']
    })
  ]
});

export default Ember.Component.extend(Validations, {
  actions: {
    submit() {
      if (this.get('validations.isValid')) {
        this.sendAction('nextPage');
      } else {
        this.set('shouldShowErrors', true);
      }
    }
  },
  shouldShowErrors: false
});
