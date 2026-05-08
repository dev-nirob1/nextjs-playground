import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';
export const createProperty = async (property) => {
    try {
        const client = await clientPromise;
        const db = client.db('next-auth');
        const propertiesCollection = db.collection('properties')
        const result = await propertiesCollection.insertOne(property)
        return result
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllProperties = async () => {
    try {
        const client = await clientPromise;
        const db = client.db('next-auth');
        const propertiesCollection = db.collection('properties');
        const result = await propertiesCollection.find({}).toArray();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export const getPropertyById = async (id) => {
    try {
        const client = await clientPromise;
        const db = client.db('next-auth');
        const propertiesCollection = db.collection('properties');
        const result = await propertiesCollection.findOne({ _id: new ObjectId(id) });
        return result;
    }
    catch (error) {
        console.log(error.message);
    }
}