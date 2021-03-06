import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    previousPage() {
      this.transitionTo('create.index');
    }
  },
  model() {
    return this.modelFor('create');
  }
});
