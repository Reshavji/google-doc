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
  const handleSaveFile = () => {
    if (fileName && content) {
      // Remove HTML tags from content
      const parser = new DOMParser();
      const parsedContent = parser.parseFromString(content, 'text/html');
      const plainTextContent = parsedContent.body.textContent;
  
      const element = document.createElement('a');
      const file = new Blob([plainTextContent], { type: 'application/msword' });
      element.href = URL.createObjectURL(file);
      element.download = `${fileName}.doc`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
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
            <Sidebar onSave={handleSaveFile} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
