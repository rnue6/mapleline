"use client";

import Header from "../../components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${email}`);
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#b86633" }}>
            Contact Us
          </h1>

          <p className="mb-4">Enter your email below to get in touch. (Demo only)</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="px-4 py-2 rounded border"
            />
            <button type="submit" className="px-4 py-2 bg-[#b86633] text-white rounded">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
