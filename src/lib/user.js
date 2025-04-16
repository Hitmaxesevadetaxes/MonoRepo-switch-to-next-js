import client from "@/lib/mongodb";

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req, res) => {
    try {
        const client = await client;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("users")
            
        res.json(users);
    } catch (e) {
        console.error(e);
    }
}