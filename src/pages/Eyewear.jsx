import React from 'react'
import Navbar from '../komponen/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Eyewear.css'

const Eyewear = () => {
    return (
        <>
            <div className='carousel-caption fs-5 text-block text-center' id='judul'>
                <p className="eyewear m-auto">EYEWEAR</p>
            </div>
            <div className="container rounded-0 bg-transparent ms-0 p-0 m-auto" id="pict">
                <img src="./eyeglass1.jpg" className="ms-0 mt-5 mx-auto" alt="..." id='img'/>
            </div>

            <div className="text-center mt-5 mb-3">
                <h1>OPTIC SHOPs</h1>
            </div>

            {/* <div className="card mb-3 w-50 my-4 border-2 rounded-0 m-auto">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img rounded-0" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ms-0">Card title</h5>
                            <p className="card-text ms-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text ms-0"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-auto border-3" style={{width:1100}} />
            <div className="card mb-3 w-50 my-4 border-2 rounded-0 m-auto">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img rounded-0" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ms-0">Card title</h5>
                            <p className="card-text ms-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text ms-0"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-auto border-3" style={{width:1100}} />
            <div className="card mb-3 w-50 my-4 border-2 rounded-0 m-auto">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img rounded-0" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ms-0">Card title</h5>
                            <p className="card-text ms-0">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text ms-0"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="card mb-3 p-0 m-auto mt-4  shadow" style={{width:1100}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img mt-0 p-2 rounded-4" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-auto border-3" style={{width:1200, color:"black"}} />

            <div className="card mb-3 p-0 m-auto mt-3  shadow" style={{width:1100}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img mt-0 p-2 rounded-4" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-auto border-3" style={{width:1200, color:"black"}} />

            <div className="card mb-3 p-0 m-auto mt-3 mb-5 shadow" style={{width:1100}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./klee.jpg" className="card-img mt-0 p-2 rounded-4" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyewear