const { MongoClient } = require('mongodb');
const config = require('../config');

const connectToMongoDB = async (state, url, dbName, mongoClient) => {
  try {
    const client = await mongoClient.connect(url);

    state.db = client.db(dbName);
    state.client = client;
    return state;
  } catch (err) {
    throw new Error(`Error on Mongo method connectToMongoDB:[${err}]`);
  }
};

const isConnected = (state) => state.db && state.client?.topology?.isConnected();

const factory = (state) => ({
  async collection(collectionName) {
    if (!isConnected(state)) {
      await connectToMongoDB(
        state,
        config.mongo.uri,
        config.mongo.dbName,
        MongoClient,
      );
    }

    return state.db.collection(collectionName);
  },
});

module.exports = factory;
