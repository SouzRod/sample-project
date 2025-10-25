const { MongoClient } = require('mongodb');
const config = require('../config');

async function connectToMongoDB(state, url, dbName, mongoClient) {
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

module.exports = (state) => ({
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
