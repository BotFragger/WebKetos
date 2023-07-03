import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar-expand-lg" id="kepala">
                <div className="container-fluid" id="navigasi">
                    {/* top left logo */}
                    {/* <a className="navbar" id="icon" href="#">KETOS</a> */}
                    <a className="" id="ketos"><button className='iconKetos'>KETOS</button></a>
                    {/* top left logo botton */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    {/* top right navigation */}
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav" id="kanan">
                            <li className="nav-item" id="navItem">
                                <a className="nav-link fs-4" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item" id="navItem">
                                <a className="nav-link fs-4" href="foodCourt">Food Court</a></li>
                            <li className="nav-item" id="navItem">
                                <a className="nav-link fs-4" href="fashion">Fashion</a></li>
                            <li className="nav-item dropdown" id="navItem">
                                {/* dropdown menu */}
                                <a className="nav-link dropdown-toggle fs-4" href="#" id="navbarDropdownMenuLink" 
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item fs-4" href="essential">Essentials</a></li>
                                    <li><a className="dropdown-item fs-4" href="#">Underwear</a></li>
                                    <li><a className="dropdown-item fs-4" href="#">Eyewear</a></li>
                                    <li><a className="dropdown-item fs-4" href="kids">Kids</a></li>
                                    <li><a className="dropdown-item fs-4" href="#">Electronics</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar