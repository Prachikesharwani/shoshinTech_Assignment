import React from "react";
import styles from "./EmployeesAndTalent.module.css";

function Employees({ title, value, subtitle1, subtitle2, percentValue }) {
  return (
    <div className={`${styles.employeesItem}`}>
      <p>{title}</p>
      <div className={styles.contents}>
        <div className={styles.content}>
          <p>{value}</p>
          <div className={styles.subtitles}>
            <span>{subtitle1}</span>
            <span>{subtitle2}</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.graph}>
            <span>+{percentValue}%</span>
            <img src="/assets/arrow.svg" alt="arrow" width='17' height='17'/>
            <img src="/assets/graph.svg" alt="graph" />
          </div>
          <div className={styles.percent}>+{percentValue}% Past month</div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
