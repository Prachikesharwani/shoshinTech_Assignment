import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import styles from "./Layout.module.css";

export default function Layout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(prevState => !prevState);
  };

  return (
    <div className={styles.container}>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={styles.content}>
        <Header toggleSidebar={toggleSidebar} isSidebarExpanded={isSidebarExpanded} />
        <div className={styles.items}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
