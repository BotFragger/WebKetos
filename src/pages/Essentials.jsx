import React from 'react'
import "./Essentials.css"

const Essentials = () => {
    return (
        <>
            <div className='carousel-caption fs-5 text-block text-center' id='title'>
                <p className="essential m-auto">ESSENTIALS</p>
            </div>
            <div className="container rounded-0 bg-transparent ms-0 p-0" id="pict">
                <img src="./essential.jpg" className="ms-0 mt-5 mx-auto" alt="..." id='img3'/>
            </div>
            <div className="card bg-transparent border-0 text-white my-3 w-50 m-auto" id='outer'>
                <img src="./payless.jpg" className="card-img m-auto w-100 px-0 shadow-lg" id="ess"alt="..."/>
                <div className="card-img-overlay m-auto">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </>
    )
}

export default Essentials