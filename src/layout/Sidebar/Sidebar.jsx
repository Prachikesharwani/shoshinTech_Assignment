import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MenuItem = ({ to, icon, text, isActive, onClick }) => (
  <li className={classNames({ [styles.active]: isActive })} onClick={onClick}>
    <img src={icon} alt={`${text}-icon`} />
    <span>{text}</span>
  </li>
);

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const mainMenuItems = [
    { to: '/', icon: '/assets/dashboard.svg', text: 'Dashboard', isActive: true },
    { to: '/recruitment', icon: '/assets/recruitment.svg', text: 'Recruitment' },
    { to: '/schedule', icon: '/assets/calendar.svg', text: 'Schedule' },
    { to: '/employee', icon: '/assets/employee.svg', text: 'Employee' },
    { to: '/department', icon: '/assets/department.svg', text: 'Department' }
  ];

  const otherMenuItems = [
    { to: '/support', icon: '/assets/support.svg', text: 'Support' },
    { to: '/settings', icon: '/assets/settings.svg', text: 'Settings' }
  ];

  return (
    <div className={classNames(styles.sidebar, { [styles.expanded]: isExpanded })}>
      <Link to='/' className={styles.logo}>
        <img src="/assets/brandLogo.svg" alt="Brand logo" />
        <span>Vasitum</span>
      </Link>
      
      <div className={styles.menuItems}>
        <p>MAIN MENU</p>
        <nav>
          <ul>
            {mainMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                to={item.to}
                icon={item.icon}
                text={item.text}
                isActive={item.isActive}
              />
            ))}
          </ul>
        </nav>
      </div>

      {isExpanded && (
        <div className={styles.closeIcon} onClick={toggleSidebar}>
          <img src="/assets/cross.svg" alt="Close sidebar" />
        </div>
      )}

      <div className={styles.menuItems}>
        <p>OTHER</p>
        <nav>
          <ul>
            {otherMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                to={item.to}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
