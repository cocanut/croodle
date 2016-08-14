import PageObject from 'ember-cli-page-object';

let {
  clickable,
  fillable,
  visitable
} = PageObject;

export default PageObject.create({
  next: clickable('button[type="submit"]'),
  pollType: fillable('.poll-type select'),
  visit: visitable('/create')
});
