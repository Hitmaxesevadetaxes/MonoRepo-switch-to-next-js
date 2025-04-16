"use client";
import React from "react";

import styles from "./info.module.css";

const InfoTable = () => {
  return (
    <div className={styles.infoTable}>
      <div className={styles.row}>
        <div className={styles.label}>Ім’я дитини:</div>
        <div className={styles.value}>Світлана Іванчик Прокопіївна</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Клас:</div>
        <div className={styles.value}>2-Б</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Класний керівник:</div>
        <div className={styles.value}>
          Остроцька Мирослава Петрівна, +380 (98) 653 7553
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
