import React, { useState } from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [editingStarted, setEditingStarted] = useState(false);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleStartEditing = () => {
    setEditingStarted(true);
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  return (
    <div className="App">
      <Toolbar fileName={fileName} />
      <div className="MainContainer">
        {!editingStarted ? (
          <div className="input-container">
            <input
              type="text"
              value={fileName}
              onChange={handleFileNameChange}
              placeholder="Enter a file name"
            />
            <button onClick={handleStartEditing}>Start Editing</button>
          </div>
        ) : (
          <>
            <TextEditor value={content} onChange={handleEditorChange} />
            <Sidebar />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
