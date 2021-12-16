import React from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  const divColorPlateStyle = {
    margin: "0px 10px"
  };

  const colorPlateStyle = {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    margin: "0px 5px",
    border: "2px",
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* dynamic color buttons */}
            <div style={divColorPlateStyle}>
              <button
                onClick={() => props.colorDisplayModeChanger("primary")}
                type="button"
                className="btn btn-primary button button5"
                style={colorPlateStyle}
              />

              <button
                onClick={() => props.colorDisplayModeChanger("secondary")}
                type="button"
                className="btn btn-secondary"
                style={colorPlateStyle}
              />
              <button
                onClick={() => props.colorDisplayModeChanger("success")}
                type="button"
                className="btn btn-success"
                style={colorPlateStyle}
              />
              <button
                onClick={() => props.colorDisplayModeChanger("danger")}
                type="button"
                className="btn btn-danger"
                style={colorPlateStyle}
              />
              <button
                onClick={() => props.colorDisplayModeChanger("warning")}
                type="button"
                className="btn btn-warning"
                style={colorPlateStyle}
              />
              <button
                onClick={() => props.colorDisplayModeChanger("info")}
                type="button"
                className="btn btn-info"
                style={colorPlateStyle}
              />
            </div>
            {/* end */}
            <Switch mode={props.mode} toggleMode={props.toggleMode} />
            {/* <div
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
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Disable Dark Mode"}
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Specifies the default values for props:
Navbar.defaultProps = {
  title: "Text",
  homeText: "Home Default",
  aboutText: "About Default",
};
