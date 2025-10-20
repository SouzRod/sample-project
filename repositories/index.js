import factory from './factory.js';
import mongo from '../database/index.js';
import config from '../config/index.js';

const createConfig = collection => ({
  db: mongo,
  collectionName: collection,
  configConnection: {
    uri: config.mongo.uri,
    base: config.mongo.dbName,
  },
});

export const product = factory(createConfig(config.mongo.collections.product));
