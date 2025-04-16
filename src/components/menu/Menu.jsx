"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";

const MenuTable = ({ sheetIndex, dayName }) => {
  const [formData, setFormData] = useState({
    first: "",
    second: "",
    snack: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/sendToSheet", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          sheetIndex,
        }),
      });
      const result = await res.json();
      alert(result.success ? "Успішно надіслано!" : "Помилка при надсиланні");
    } catch (err) {
      console.error("Помилка:", err);
      alert("Щось пішло не так");
    }
  };

  return (
    <div className={styles.menuContainer}>
      <h3>{dayName}</h3>
      <p>Перша страва</p>
      <select name="first" onChange={handleChange} className={styles.select}>
        <option value="Суп">Суп</option>
        <option value="Борщ">Борщ</option>
      </select>

      <p>Основна страва</p>
      <select name="second" onChange={handleChange} className={styles.select}>
        <option value="Картошка з грибами">Картошка з грибами</option>
        <option value="Гречка з котлетою">Гречка з котлетою</option>
      </select>

      <p>Підвечірок</p>
      <select name="snack" onChange={handleChange} className={styles.select}>
        <option value="так">Так</option>
        <option value="ні">Ні</option>
      </select>

      <button onClick={handleSubmit} className={styles.button}>
        Підтвердити
      </button>
    </div>
  );
};

const Menu = () => {
  const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <MenuTable key={index} sheetIndex={index} dayName={day} />
      ))}
    </div>
  );
};

export default Menu;
