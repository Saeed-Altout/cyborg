import { Link } from 'react-router-dom'

import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, { } from '../../components/NavItem/NavItem'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark cyborg-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" width={120} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cta-mobile" aria-controls="cta-mobile" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="cta-mobile">
                    <form className="d-sm-none"> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavItem><Link to="/" className="nav-link active" aria-current="page">Home</Link></NavItem>
                        <NavItem><Link className="nav-link " aria-current="page" to="/Browse"> Browse </Link></NavItem>
                        <NavItem><Link className="nav-link " aria-current="page" to="/Details"> Details </Link></NavItem>
                        <NavItem><Link className="nav-link " aria-current="page" to="/Streams"> Streams </Link></NavItem>
                        <NavItem><Link className="nav-link " aria-current="page" to="/Profile"> Profile </Link></NavItem>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header