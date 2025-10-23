const factory = require('./factory.js');

const state = {
  db: null,
};

const wrapper = factory(state);

module.exports = wrapper;