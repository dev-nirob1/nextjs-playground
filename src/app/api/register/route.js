import { createUser } from "@/config/user";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {name, email, password} = await request.json();

    await createUser({name, email, password});

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}