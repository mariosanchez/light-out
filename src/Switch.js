import React from "react";

import "./Switch.css";

function Switch({ value, onClick }) {
  return (
    <button className="switch" onClick={onClick}>
      {value === 0 ? "🌚" : "🌝"}
    </button>
  );
}

export default Switch;
