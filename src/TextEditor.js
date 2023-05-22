import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, onChange }) => {
  return (
    <div className="text-editor">
      <div className="content-container">
        <div className="editor-container">
          <ReactQuill
            value={value}
            onChange={onChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'blockquote',
              'list',
              'bullet',
              'link',
              'image',
            ]}
            placeholder="Write something..."
            className="editor"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
