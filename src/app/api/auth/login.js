import client from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не дозволено" });
  }

  const { email, password } = req.body;

  try {
    const mongoClient = await client;
    const db = mongoClient.db();

    const user = await db.collection("users").findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Невірний логін або пароль" });
    }

    res.setHeader("Set-Cookie", `logged_in=true; Path=/; HttpOnly; Max-Age=3600`);
    return res.status(200).json({ message: "Вхід успішний" });
  } catch (error) {
    console.error("Помилка підключення до БД:", error);
    return res.status(500).json({ message: "Помилка сервера" });
  }
}
