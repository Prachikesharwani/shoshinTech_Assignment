import React, { useState } from 'react';
import styles from './Schedule.module.css';
import ScheduleItem from './ScheduleItem'; 

const Schedule = () => {
  const [filter, setFilter] = useState("all");

  const schedules = [
    { text: "Review candidate applications", time: "Today - 11:30 AM", date: "Today, 13 Sep 2021", category: "Priority" },
    { text: "Interview with candidates", time: "Today - 10:30 AM", date: "Today, 13 Sep 2021", category: "Priority" },
    { text: "Short meeting with product designer from IT Department", time: "Today - 9:15 AM", date: "Today, 13 Sep 2021", category: "Other" }
  ];

  const filteredSchedules = schedules.filter(schedule => 
    filter === "all" || schedule.date === filter
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.announcement}>
      <div className={styles.mainContent}>
        <div className={styles.heading}>
          <h3>Upcoming Schedule</h3>
          <select onChange={handleFilterChange} value={filter}>
            <option value="all">All</option>
            <option value="Today, 13 Sep 2021">Today, 13 Sep 2021</option>
            <option value="Yesterday, 12 Sep 2021">Yesterday, 12 Sep 2021</option>
          </select>
        </div>
        <div className={styles.items}>
          <p>Priority</p>
          {filteredSchedules
            .filter(schedule => schedule.category === "Priority")
            .map((schedule, index) => (
              <ScheduleItem
                key={index}
                text={schedule.text}
                time={schedule.time}
              />
            ))}
          <p>Other</p>
          {filteredSchedules
            .filter(schedule => schedule.category === "Other")
            .map((schedule, index) => (
              <ScheduleItem
                key={index}
                text={schedule.text}
                time={schedule.time}
              />
            ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p>Create a New Schedule</p>
      </div>
    </div>
  );
};

export default Schedule;
