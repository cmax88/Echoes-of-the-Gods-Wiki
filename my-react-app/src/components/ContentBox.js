import React, { useState } from 'react';

function ContentBox() {
  const [pageHeading, setPageHeading] = useState('Default Heading');
  return (
    <input type="text" value={pageHeading} onChange={(e) => setPageHeading(e.target.value)} />
  );
  }
export default ContentBox;
