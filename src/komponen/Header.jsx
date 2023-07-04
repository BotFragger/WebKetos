import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
createBootstrapComponent
import './Header.css';

const Header = () => {
    return (
        <>
            
            
            <div id="carouselExampleControls" className="carousel slide mb-0" data-bs-ride="carousel">
                <div className='carousel-caption fs-5 text-block'>
                    <p className="profil">KEDIRI</p>
                    <p className="profil">TOWN SQUARE</p>
                </div>
                {/* gambar mall */}
                <div className="carousel-inner" id="gambar">
                    <div className="carousel-item active">
                        <img src="./mall1.png" className="d-block w-100 mx-auto h-25" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./mall2.png" className="d-block w-100 mx-auto h-25" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./mall3.jpg" className="d-block w-100 mx-auto h-25" alt="..."/>
                    </div>
                </div>

                {/* tombol slide kiri kanan */}
                <button className="carousel-control-prev" type="button" 
                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" 
                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Header
