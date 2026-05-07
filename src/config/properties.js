import clientPromise from '@/lib/mongodb'
export const createProperty = async(property) => {
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