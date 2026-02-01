"use client";

import Header from "../../components/Header";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function LearnMore() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you learn about sustainable and eco-friendly clothing practices. Whether you're interested in ethical fashion, sustainable materials, or how to make more conscious shopping choices, I'm happy to help! What would you like to know about sustainable fashion?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch (e) {
        // ignore JSON parse errors
      }

      if (!response.ok) {
        const errMsg = data?.error || data?.message || `API Error ${response.status}`;
        throw new Error(String(errMsg));
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data?.message || String(data) || "(no response)",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const msg = (error as Error).message || "Unknown error";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I encountered an error: ${msg}. Check your API key and server logs.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-2xl h-[600px] flex flex-col">
          <h1 className="text-3xl font-bold mb-6" style={{ color: "#b86633" }}>
            Learn More About Sustainable Fashion
          </h1>

          {/* Chat messages container */}
          <div className="flex-1 overflow-y-auto mb-4 bg-white rounded p-4 border border-gray-300">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block max-w-xs px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-4 text-left">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about sustainable fashion practices..."
              disabled={isLoading}
              style={{ backgroundColor: "#faf8f5", color: "#333333" }}
              className="flex-1 px-4 py-2 rounded border border-gray-300 placeholder-gray-500 disabled:bg-gray-300"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                backgroundColor: "#b86633",
                color: "white",
                cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
              }}
              className="px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Send
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            This chat focuses on sustainable and eco-friendly clothing practices and related topics.
          </p>
        </div>
      </main>
    </div>
  );
}
