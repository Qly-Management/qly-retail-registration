import React, { useState } from "react";

export default function ({ placeholder, errorMessage, validation, style }) {
  const [currVal, setCurrVal] = useState("");
  const [error, setError] = useState("");

  return (
    <div style={{ ...style }}>
      <input
        placeholder={placeholder}
        value={currVal}
        onChange={(e) => {
          setCurrVal(e.target.value);
          validation(e.target.value) ? setError("") : setError(errorMessage);
        }}
        type="text"
      />

      <div className="error">{error}</div>
    </div>
  );
}
