import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL ?? 'mongodb://127.0.0.1:27017';
const databaseName = process.env.MONGODB_DATABASE ?? 'app';
let client;

try {
  client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  const database = client.db(databaseName);
  await database.command({ ping: 1 });
  console.log(`Connected to MongoDB; selected database "${databaseName}".`);
} catch (error) {
  console.error(`Could not connect to MongoDB (${error.name}). Check MONGODB_URL and confirm the server is running.`);
  process.exitCode = 1;
} finally {
  await client?.close();
}
