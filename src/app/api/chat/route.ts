import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    if (!messages || messages.length === 0)
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });

    if (!GEMINI_API_KEY)
      return NextResponse.json({ error: "GEMINI_API_KEY not set" }, { status: 500 });

    // Build system + user prompt
    const systemPrompt =
      "You are an expert advisor on sustainable and eco-friendly clothing practices. Reply only about sustainability topics related to clothing.";

    const userPrompt = messages.map((m: Message) => `${m.role.toUpperCase()}: ${m.content}`).join("\n");
    const prompt = `${systemPrompt}\n\n${userPrompt}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
      GEMINI_MODEL
    )}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

    console.log("Calling Gemini API:", {
      url: url.replace(GEMINI_API_KEY, "***"),
      model: GEMINI_MODEL,
      keyLength: GEMINI_API_KEY.length,
    });

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    console.log("Gemini API response:", {
      status: response.status,
      ok: response.ok,
      body: text.slice(0, 500),
    });

    if (!response.ok) {
      console.error("Gemini API error:", response.status, text.slice(0, 500));
      return NextResponse.json({ error: `Gemini API error ${response.status}: ${text.slice(0, 200)}` }, { status: 502 });
    }

    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({ message: text.slice(0, 1000) });
    }

    const assistantMessage =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.text ||
      JSON.stringify(data) ||
      "(empty response)";

    return NextResponse.json({ message: assistantMessage });
  } catch (err) {
    console.error("Error in chat API:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
