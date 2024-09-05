import React, { useState } from 'react';
import styles from './Schedule.module.css';

const ScheduleItem = ({ text, time }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <p>{text}</p>
        <span>{time}</span>
      </div>
      <div className={styles.action} onClick={handleToggle}>
        <img src="/assets/tripleDot.svg" alt="Options menu" />
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <p>Update</p>
            <p>More</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;
