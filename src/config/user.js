import clientPromise from "@/lib/mongodb";
export const createUser = async (credentail) => {
    try {
        const client = await clientPromise;
        const db = client.db('next-auth');
        const usersCollection = db.collection('users');
        const result = await usersCollection.insertOne(credentail);
        return result;
    } catch (err) {
        console.log(err.message);
    }
}