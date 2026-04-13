"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/login", { method: "POST" });
    router.push("/");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Sign in (dev)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" defaultValue="umbercanada" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="password" defaultValue="test umber" />
        </label>
        <br />
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}



