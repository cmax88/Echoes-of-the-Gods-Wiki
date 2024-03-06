import React, { useState } from 'react';

function ContentBox({ heading, setHeading }) {
  return (
    <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />
  );
  }
export default ContentBox;
