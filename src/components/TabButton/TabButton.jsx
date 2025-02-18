import React from "react";

const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
