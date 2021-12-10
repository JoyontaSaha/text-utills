import React from "react";

export default function Switch(props) {
  return (
    <div
      className={`form-check form-switch text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <input
        onClick={props.toggleMode}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
      </label>
    </div>
  );
}
