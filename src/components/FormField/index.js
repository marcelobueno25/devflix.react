import React from "react";

function FormField({ label, type, name, value, onChange, required }) {
  return (
    <div>
      <label>
        {label}:
        <input
          required={required}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;