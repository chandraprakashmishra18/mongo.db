import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL ?? 'mongodb://127.0.0.1:27017';
const databaseName = process.env.MONGODB_DATABASE ?? 'app';
let client;

try {
  client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  const database = client.db(databaseName);
  await database.command({ ping: 1 });
  console.log(`Connected to MongoDB; database "${databaseName}" is ready.`);
} catch (error) {
  console.error(`Could not connect to MongoDB at ${uri}: ${error.message}`);
  process.exitCode = 1;
} finally {
  await client?.close();
}
