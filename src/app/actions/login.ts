'use server'

import { redirect } from "next/navigation";

export async function checkLoginAction(prevState: any, formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
    const errorData = await res.json();
    return { error: errorData?.error || "로그인 실패" };
    }
    redirect("/");
}