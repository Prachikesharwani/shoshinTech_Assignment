import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = ({ toggleSidebar, isSidebarExpanded }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <img 
          src={isSidebarExpanded ? "/assets/cross.svg" : "/assets/hamburgerMenu.svg"} 
          alt={isSidebarExpanded ? "Close menu" : "Hamburger menu"} 
        />
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Search" />
        <img src="/assets/search.png" alt="Search icon" />
      </div>

      <div className={styles.userInfo}>
        <img src='/assets/notifications.svg' alt='notification-icon'/>
        <img src='/assets/msg.svg' alt="msg-icon" />
        <div className={styles.profile} onClick={handleDropdownToggle}>
          <img src="/assets/profile.png" alt="user" className={styles.avatar} />
          <span>Admirra John</span>
          <img src="/assets/dropdownIcon.svg" alt="dropdown-icon" className={styles.dropdownIcon} />
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
