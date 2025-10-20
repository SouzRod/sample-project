import { MongoClient } from 'mongodb';
import config from '../config/index.js';

const connectToMongoDB = async (state, url, dbName, mongoClient) => {
  try {
    const client = await mongoClient.connect(url, { useNewUrlParser: true });

    state.db = client.db(dbName);
    state.client = client;
    return state;
  } catch (err) {
    throw new Error(`Error on Mongo method connectToMongoDB:[${err}]`);
  }
};

const factory = (state) => ({
  isConnected() {
    return state.db && state.client?.topology?.isConnected();
  },

  async collection(collectionName) {
    if (!this.isConnected()) {
      await connectToMongoDB(
        state,
        config.mongo.uri,
        config.mongo.dbName,
        MongoClient,
      );
    }

    return state.db.collection(collectionName);
  },

  db() {
    return state.db;
  },
});

export default factory;
