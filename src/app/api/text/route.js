import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("real_estate_db");

    const result = await db.command({ ping: 1 });

    return Response.json({
      success: true,
      message: "MongoDB connected",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}