import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email та пароль обов'язкові" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Users"); 

    const user = await db
      .collection("users")
      .findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return NextResponse.json(
        { message: "Користувача не знайдено" },
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json(
        { message: "Невірний пароль" },
        { status: 401 }
      );
    }

    // Успішний логін
    return NextResponse.json({
      message: "Вхід успішний",
      user: {
        email: user.email,
        // Можна додати будь-які інші не-чутливі поля
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { message: "Внутрішня помилка сервера" },
      { status: 500 }
    );
  }
}
