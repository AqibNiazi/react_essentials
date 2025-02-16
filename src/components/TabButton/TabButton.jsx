import React from "react";

const TabButton = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default TabButton;
