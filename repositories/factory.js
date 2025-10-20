import { v4 } from 'uuid';

export default ({ db, collectionName, configConnection }) => ({
  insert: async item => {
    const collection = await db.collection(collectionName, configConnection);
    const result = await collection.insertOne({ _id: v4(), ...item });
    return result.insertedId;
  },
  update: async (filter, item) => {
    const collection = await db.collection(collectionName, configConnection);
    return collection.updateOne(filter, { $set: item });
  },
  findOne: async (filter) => {
    const collection = await db.collection(collectionName, configConnection);
    return collection.findOne(filter);
  },
  findMany: async (filter) => {
    const collection = await db.collection(collectionName, configConnection);
    return collection.find(filter).toArray();
  },
  deleteOne: async (filter) => {
    const collection = await db.collection(collectionName, configConnection);
    return collection.deleteOne(filter);
  },
});