import React, { useState } from "react";
import styles from "./Announcement.module.css";

const AnnouncementItem = ({ id, text, time, isPinned, onPin, onDropdown }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handlePinClick = () => {
    onPin(id);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
    onDropdown();
  };

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <p>{text}</p>
        <span>{time}</span>
      </div>
      <div className={styles.action}>
        <img
          src={isPinned ? "/assets/pinned.svg" : "/assets/pin.svg"}
          alt="Pin icon"
          onClick={handlePinClick}
        />
        <div className={styles.dropdown}>
          <img
            src="/assets/tripleDot.svg"
            alt="Options menu"
            onClick={handleDropdownClick}
          />
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <p>Update</p>
              <p>More</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementItem;
