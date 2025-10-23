const factory = require('./factory.js');
const mongo = require('../database');
const config = require('../config');

const createConfig = collection => ({
  db: mongo,
  collectionName: collection,
  configConnection: {
    uri: config.mongo.uri,
    base: config.mongo.dbName,
  },
});

const product = factory(createConfig(config.mongo.collections.product));

module.exports = { product };
