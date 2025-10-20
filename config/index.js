import dotenv from 'dotenv';
dotenv.config();

export default {
  stripPrefix: {
    usePrefix: process.env.USE_PREFIX === 'true',
    path: `/api/${process.env.SERVICE_NAME.replace(/-/g, '')}`,
  },
  plugins: {
    swagger: {
      basePath: process.env.USE_PREFIX === 'true'
        ? `/api/${process.env.SERVICE_NAME.replace(/-/g, '')}` : '/',
    },
  },
  app: {
    name: process.env.SERVICE_NAME,
    port: process.env.PORT,
    env: process.env.ENV,
  },
  mongo: {
    uri: process.env.MONGO_URI,
    dbName: process.env.MONGO_DB_NAME,
    collections: {
      product: process.env.MONGO_COLLECTION_PRODUCT,
    },
  },
};