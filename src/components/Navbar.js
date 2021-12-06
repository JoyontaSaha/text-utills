import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar (props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
                             </li>
                             <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                             </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Text',
    homeText: 'Home Default',
    aboutText: 'About Default'
  };