import React, { useRef, useState, useEffect } from 'react';

const InnerContentHeight = () => {
  const innerContentRef = useRef(null);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (innerContentRef.current) {
      const height = innerContentRef.current.scrollHeight;
      setInnerHeight(height);
    }
  }, []);

  return (
    <div ref={innerContentRef}>
      {/* Your inner content here */}
      {/* This could be a long list of items, text, or any content */}
    </div>
  );
};

export default InnerContentHeight;
