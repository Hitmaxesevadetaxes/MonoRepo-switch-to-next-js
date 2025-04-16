"use client";
import "./SheduleTable.module.css";
import React from "react";

const schedule = {
  Понеділок: [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
  Вівторок: [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
  Середа: [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
  Четвер: [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
  "П'ятниця": [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
};

const ScheduleTable = () => {
  return (
    <div className="schedule-container">
      {Object.entries(schedule).map(([day, lessons]) => (
        <React.Fragment key={day}>
          <div className="day-heading">{day}</div>
          {lessons.map((lesson, idx) =>
            typeof lesson === "string" ? (
              <div key={idx} className="break">
                {lesson}
              </div>
            ) : (
              <div key={idx} className="lesson">
                <div className="lesson-name">{lesson.subject}</div>
                <div className="lesson-time">{lesson.time}</div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScheduleTable;
