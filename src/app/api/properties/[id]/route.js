import { getPropertyById } from "@/config/properties";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const id = await params
    try {
        const singleProperty = await getPropertyById(id);
        return NextResponse.json({
            message: "Property retrieved successfully",
            singleProperty
        }, { status: 200 })
    } catch (error) {
        console.log(error.message);
    }
}