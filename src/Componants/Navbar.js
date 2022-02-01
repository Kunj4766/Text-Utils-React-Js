import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.myMode==='info'?'light':'dark'} bg-${props.myMode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <props.link className="nav-link" to="/about">About Us</props.link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" onClick={props.jane}  type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className ={`form-check-label text-${props.myMode==='info'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Type Your Title',
    about: 'Fill Your Field'
};
