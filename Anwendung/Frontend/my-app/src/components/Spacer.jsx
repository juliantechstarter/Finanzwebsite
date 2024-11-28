import React from 'react';

const Spacer = ({ height = "200px" }) => {
  return (
    <div style={{ height, backgroundColor: "transparent" }}></div>
  );
};

export default Spacer;
