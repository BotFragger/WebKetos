import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Header from '../komponen/Header';
import './Home2.css'


const Home = () => {
    
    return (
        <>
            <Header></Header>
                <div className="promo text-center my-4">
                    <h1>PROMO</h1>
                </div>
                
                <div className="row p-0 container w-50 h-50 bg-transparent m-auto" id="grid">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        id='imgHome'/>

                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                        id='imgHome'/>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                        id='imgHome'/>

                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        id='imgHome'/>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                        id='imgHome'/>

                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                        id='imgHome'/>
                    </div>
                </div>


                <div className="facility text-center mt-5">
                    <h1>FASILITAS</h1>
                </div>
                {/* <div className="container p-0 bg-transparent m-auto" id="facility">
                    <div className="row row-cols-3 row-cols-lg-3 g-0 g-lg-0">
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                        <div className="col">
                            <img src="./test.jpg" className="kolom p-3" id='imgHome' style={{maxWidth:300, maxheight:300}}/>
                        </div>
                    </div>
                </div> */}

                <div className="container mb-3 w-50 h-50">
                    <div className="card card-body bg-transparent border-0">
                        <div className="row ">
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                        </div>
                        <div className="row my-4">
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                            <img src="./test.jpg" className="col-sm-4" id='imgHome'/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home 
