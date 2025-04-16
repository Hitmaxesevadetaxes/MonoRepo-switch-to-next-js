"use client";
import "./Sidebar.module.css";
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
    <aside className="sidebar-container">
      <div className="d-flex flex-column justify-content-center mb-6">
        <div className="logo-container">
          <img src="/3.svg" alt="Logo" className="logo-image" />
        </div>

        {navItems.map((item, index) => (
          <a key={index} href={item.link}>
            <div>
              {item.icon} {item.text} 
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
