import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Sets image to base64 encoded string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: 'auto' }} />}
    </div>
  );
}

export default ImageUploader;
