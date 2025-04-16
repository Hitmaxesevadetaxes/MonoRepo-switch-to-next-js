"use client";
import styles from "./Sidebar.module.css";
import React from "react";

import {
  Home,
  BookOpen,
  ClipboardList,
  Calendar,
  Clock,
  CreditCard,
  Utensils,
} from "lucide-react";

const navItems = [
  { icon: <Home />, text: "Головна", link: "/home" },
  { icon: <BookOpen />, text: "Оцінки", link: "/marks" },
  { icon: <ClipboardList />, text: "Завдання", link: "/tasks" },
  { icon: <Calendar />, text: "Розклад", link: "/timetable" },
  { icon: <Clock />, text: "Відвідуваність", link: "/attendance" },
  { icon: <CreditCard />, text: "Оплата", link: "/payment" },
  { icon: <Utensils />, text: "Меню", link: "/menu" },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img src="/3.svg" alt="Logo" className={styles.logoImage} />
      </div>

      {navItems.map((item, index) => (
        <a key={index} href={item.link} className={styles.navItem}>
          <span>{item.icon}</span>
          <span style={{ marginLeft: '10px' }}>{item.text}</span>
        </a>
      ))}
    </aside>
  );
}


