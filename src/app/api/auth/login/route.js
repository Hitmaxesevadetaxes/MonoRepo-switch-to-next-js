import { NextResponse } from "next/server";
import client from "@/lib/mongodb";



export async function POST(req) {
  try {
    const { username, password } = await req.json();

    await client.connect();
    const db = client.db();
    const user = await db.collection("users").findOne({ username });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Невірний логін або пароль" }, { status: 401 });
    }

    // Встановлюємо cookie
    const res = NextResponse.json({ message: "Вхід успішний" });
    res.cookies.set("logged_in", "true", {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60, // 1 година
    });

    return res;
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Помилка сервера" }, { status: 500 });
  }
}
