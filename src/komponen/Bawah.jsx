import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Bawah.css'

const Bawah = () => {
    return (
        <>
            {/* <div className="text-light" id="kaki">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body d-grid">
                            <h5 className="card-title"><span style={{color:'#F0D43A'}}>Contact</span></h5>
                            <ul className="tentang" id="">
                                <li className="support"><a href="#">About Us</a></li>
                                <li className="support"><a href="#">Support</a></li>
                                <li className="support"><a href="#">Contact Us</a></li>
                                <li className="support"><a href="#">Address</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <footer className="text-white px-2 pt-2" id="footer">
                
                    <div className="row w-75 mt-4 ms-3">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ms-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. <br/>Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam,<br/> est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ms-5">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li>
                                <a href="#!" className="text-white" id="links">Link 1</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white" id="links">Link 2</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white" id="links">Link 3</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white" id="links">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                <div className="text-center pt-5 mt-5 mb-0">
                    © 2020 Copyright:
                    <a className="text-white mb-0" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </>
    )
}

export default Bawah