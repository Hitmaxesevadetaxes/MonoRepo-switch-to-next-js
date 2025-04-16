"use server";

import { connectToDb } from "../../lib/mongodb";
import { cookies } from "next/headers";

export async function Home(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const db = await connectToDb();
  const user = await db.collection("users").findOne({ email });

  if (!user || user.password !== password) {
    return { error: "Невірний логін або пароль" };
  }

  cookies().set("auth", user._id.toString(), {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return { success: true };
}
