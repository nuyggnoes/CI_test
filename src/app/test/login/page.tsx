"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { notFound } from "next/navigation";

if (process.env.NODE_ENV === "production") notFound();

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("로그인 실패");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">LOGIN</button>
    </form>
  );
}
