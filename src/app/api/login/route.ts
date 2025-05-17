import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    console.log('email, password', email, password);

    const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        
    });
    

    if (!res.ok) {
        const errorBody = await res.text();
        return NextResponse.json({ error: errorBody }, { status: 401 });
    }

    const data = await res.json();

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", data.accessToken, {
        path: "/",
        httpOnly: true,
    });

    return response;
}
