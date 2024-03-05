import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter content here..."
        style={{ width: '85%', height: '150px' }}
      />
    </div>
  );
}

export default TextEditor;
