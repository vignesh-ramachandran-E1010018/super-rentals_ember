import DS from 'ember-data';

console.log("model rental");

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
});
