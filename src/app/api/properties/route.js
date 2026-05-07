import { createProperty } from "@/config/properties";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const propertyData = await request.json();
    const result = await createProperty(propertyData);
    return NextResponse.json(
        {
            message: "Property created successfully",
            result
        },
        { status: 201 }
    );
}