import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Bawah.css'

const Bawah = () => {
    return (
        <>
            <div className="text-light mt-5" id="kaki">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
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
            </div>
        </>
    )
}

export default Bawah