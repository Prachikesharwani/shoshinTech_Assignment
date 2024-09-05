import React, { useState } from "react";
import styles from "./Announcement.module.css";
import AnnouncementItem from "./AnnouncementItem";

const Announcement = () => {
  const [filter, setFilter] = useState("all");
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Outing schedule for every department", time: "5 minutes ago", date: "Today, 13 Sep 2021", isPinned: false },
    { id: 2, text: "Meeting HR Department", time: "Yesterday, 12:30 PM", date: "Yesterday, 12 Sep 2021", isPinned: false },
    { id: 3, text: "IT Department needs two more talents for UX/UI Designer position", time: "Yesterday, 9:15 AM", date: "Yesterday, 12 Sep 2021", isPinned: false }
  ]);

  const filteredAnnouncements = announcements
    .filter(announcement => filter === "all" || announcement.date === filter)
    .sort((a, b) => b.isPinned - a.isPinned);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePin = (id) => {
    const updatedAnnouncements = announcements.map(announcement =>
      announcement.id === id
        ? { ...announcement, isPinned: !announcement.isPinned }
        : announcement
    );
    setAnnouncements(updatedAnnouncements);
  };

  const handleDropdown = () => {
    // dropdown logic if needed
  };

  return (
    <div className={styles.announcement}>
      <div className={styles.mainContent}>
        <div className={styles.heading}>
          <h3>Announcement</h3>
          <select onChange={handleFilterChange} value={filter}>
            <option value="all">All</option>
            <option value="Today, 13 Sep 2021">Today, 13 Sep 2021</option>
            <option value="Yesterday, 12 Sep 2021">Yesterday, 12 Sep 2021</option>
          </select>
        </div>
        <div className={styles.items}>
          {filteredAnnouncements.map((announcement) => (
            <AnnouncementItem
              key={announcement.id}
              id={announcement.id}
              text={announcement.text}
              time={announcement.time}
              isPinned={announcement.isPinned}
              onPin={handlePin}
              onDropdown={handleDropdown}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p>See All Announcements</p>
      </div>
    </div>
  );
};

export default Announcement;
