import { createProperty, getAllProperties } from "@/config/properties";
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
export const GET = async () => {
    try {
        const properties = await getAllProperties();
        return NextResponse.json(
            {
                message: "Properties retrieved successfully",
                properties
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error.message);
    }
}
// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
// export const runtime = 'edge';
// export const fetchCache = 'force-no-store';
