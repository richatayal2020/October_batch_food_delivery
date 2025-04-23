import React, { useRef } from 'react';

const Ref = () => {
  const divRef = useRef(null);

  const handleChangeStyle = () => {
    divRef.current.style.backgroundColor = 'lightgreen';
    divRef.current.style.padding = '20px';
  };

  return (
    <>
      <div ref={divRef}>Watch my style change</div>
      <button onClick={handleChangeStyle}>Change Style</button>
    </>
  );
};

export default Ref;
