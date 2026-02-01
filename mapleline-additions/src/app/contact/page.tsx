"use client";

import Header from "../../components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${firstName} ${lastName} <${email}>\n\n${message}`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-2xl bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-4 bg-white inline-block px-2" style={{ color: "#b86633" }}>
            Contact Us
          </h1>

          <p className="mb-4 bg-white">Enter your email below to get in touch. (Demo only)</p>

          <p className="mb-6 italic bg-white" style={{ color: "#b86633" }}>Are you a sustainable clothing retailer looking to be featured on MapleLine? Want to recommend a store we missed? Contact us!</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white">
            <div className="flex gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="w-1/2 px-4 py-2 rounded border bg-white"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
                className="w-1/2 px-4 py-2 rounded border bg-white"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="px-4 py-2 rounded border bg-white"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={6}
              required
              className="px-4 py-2 rounded border bg-white resize-vertical"
            />

            <button type="submit" className="px-4 py-2 bg-white text-[#b86633] rounded border border-[#b86633]">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
