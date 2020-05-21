import React from "react";

export default function ({ style, type, placeholder, label }) {
  return (
    <div className="customInput" style={{ ...style, backgroundColor: "red" }}>
      <input style={{ width: "100%" }} type={type} placeholder={placeholder} />
      <p style={{ fontSize: 10 }}>{label}</p>
    </div>
  );
}
