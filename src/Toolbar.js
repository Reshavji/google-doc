import React from 'react';

const Toolbar = ({ fileName }) => {

  return (
    <div className="toolbar">
      <img
        className="logo"
        src="https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4"
        alt="Logo"
      />
      <span id='file-name'>{ fileName }</span>
      <div className="formatting-options">
        <button className="share-option">Share</button>
      <span><img id='avatar' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png' alt='User'/></span>
      </div>
    </div>
  );
};

export default Toolbar;
