import React from 'react';
import styles from './DashboardItem.module.css';

const DashboardItem = ({ title, value, subtitle, backgroundColor, subtitleColor }) => {
  return (
    <div className={`${styles.dashboardItem}`} style={{ backgroundColor }}>
      <h3>{title}</h3>
      <p>{value}</p>
      <span style={{ color: subtitleColor }}>{subtitle}</span>
    </div>
  );
};

export default DashboardItem;
