import React from 'react';

const Sidebar = ({ onSave }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li><a href="https://drive.google.com/">Google Drive</a></li>
        <li><a href="https://sheets.google.com/">Google Sheets</a></li>
        <li><a href="https://slides.google.com/">Google Slides</a></li>
      </ul>
      <button id="save-button" onClick={onSave}>Save</button>
    </div>
  );
};

export default Sidebar;
