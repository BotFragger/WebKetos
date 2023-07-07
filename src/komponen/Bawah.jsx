import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Bawah.css'

const Bawah = () => {
    return (
        <>
            <div className="text-light" id="kaki">
            
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
                                <h5 className="text-uppercase">More Information</h5>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="mt-2">
                                    <a href="#!" target="_blank" rel="noopener noreferrer" className="list" id="links">For Partnership</a>
                                    </li>
                                    <li className="mt-2">
                                    <a href="#!" target="_blank" rel="noopener noreferrer" className="list" id="links">Event</a>
                                    </li>
                                    <li className="mt-2">
                                    <a href="#!" target="_blank" rel="noopener noreferrer" className="list" id="links">Customer Care</a>
                                    </li>
                                    <li className="mt-2">
                                    <a href="https://goo.gl/maps/JnnNUTkHG83ohL4n9" target="_blank" rel="noopener noreferrer" className="list" id="links">Address</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    <div className="text-center pt-5 mt-3 mb-0">
                        © 2023 Copyright:
                        <a className="text-white mb-0" href="#!"> Kediri Town Square</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Bawah