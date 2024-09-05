import React from 'react';
import styles from './Dashboard.module.css';
import DashboardItem from '../../components/shared/DashboardItem/DashboardItem';
import Announcement from '../../components/Announcement/Announcement';
import RecentActivity from '../../components/RecentActivity/RecentActivity';
import Schedule from '../../components/Schedule/Schedule';
import Employees from '../../components/shared/EmployeesAndTalent/EmployeesAndTalent';

const dashboardItems = [
  { title: "Available Position", value: "24", subtitle: "4 Urgently needed", backgroundColor: "#FFEFE7", subtitleColor: "#FF5151" },
  { title: "Job Open", value: "10", subtitle: "4 Active hiring", backgroundColor: "#E8F0FB", subtitleColor: "#3786F1" },
  { title: "New Employees", value: "24", subtitle: "4 Department", backgroundColor: "#FDEBF9", subtitleColor: "#EE61CF" }
];

const employeeItems = [
  { title: "Total Employees", value: "216", subtitle1: "120 Men", subtitle2: "96 Women", percentValue: "2" },
  { title: "Talent Request", value: "16", subtitle1: "6 Women", subtitle2: "10 Women", percentValue: "5" }
];

function Dashboard() {
  return (
    <div className={styles.container}>
      <p>Dashboard</p>
      <div className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.items}>
            {dashboardItems.map((item, index) => (
              <DashboardItem
                key={index}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                backgroundColor={item.backgroundColor}
                subtitleColor={item.subtitleColor}
              />
            ))}
          </div>
          <div className={styles.items}>
            {employeeItems.map((item, index) => (
              <Employees
                key={index}
                title={item.title}
                value={item.value}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                percentValue={item.percentValue}
              />
            ))}
          </div>
          <Announcement />
        </div>
        <div className={styles.rightContent}>
          <RecentActivity />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
