/* eslint-disable no-undef */
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection('meetups');
    await collection.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
