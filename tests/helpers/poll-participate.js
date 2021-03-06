import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('pollParticipate', function(app, name, selections) {
  if (!Ember.isEmpty(name)) {
    fillIn('.participation .name input', name);
  }

  const isFreeText = find('.participation .selections .radio').length ? false : true;
  selections.forEach((selection, index) => {
    if (!Ember.isEmpty(selection)) {
      if (isFreeText) {
        fillIn(`.participation .selections .form-group:nth-child(${index + 1}) input`, selection);
      } else {
        click(`.participation .selections .form-group:nth-child(${index + 1}) .${selection}.radio input`);
      }
    }
  });

  click('.participation button[type="submit"]');
});
