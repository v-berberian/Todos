import React from "react";

export function ToggleAll({ toggle, onChange }) {
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={toggle}
        onChange={onChange}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
