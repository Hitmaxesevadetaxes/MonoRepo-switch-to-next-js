import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Missing MONGODB_URI');
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable in development to preserve value across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client per request (or use pooling)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDb() {
  const client = await clientPromise;
  return client.db(); // optionally pass DB name here
}
