import React from 'react';
import styles from './RecentActivity.module.css';

const RecentActivity = () => {
  return (
    <div className={styles.recentActivity}>
      <h3>Recent Activity</h3>
      <div className={styles.details}>
      <span>10:40 AM, Fri 10 Sept 2021</span>
      <h2>You Posted a New Job</h2>
      <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
      </div>
      <div className={styles.action}>
      <p>Today you made 12 activities</p>
      <button>See All Activity</button>
      </div>
    </div>
  );
};

export default RecentActivity;
