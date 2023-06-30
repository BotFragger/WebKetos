import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Header from '../komponen/Header';
import './Home2.css'


const Home = () => {
    
    return (
        <>
            {/* <div className="background ">
                <Header></Header>
                <div className="bgImage p-3 w-75 m-auto">
                    <div className="col mt-3 w-75 mx-auto p-0" id="body">
                        <div className='text-center mb-3'>
                            <h2>PREVIEW MALL </h2>
                            <h2>KEDIRI TOWN SQUARE</h2>
                        </div>
                            
                            <div className="col-lg-12">
                                <div className="card col-lg-12 p-3 mb-4 rounded-3">
                                    <div className="row">
                                        <div className="col">
                                            <img className="w-100 rounded-3" src="https://via.placeholder.com/350x350"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-block">
                                                <h6 className="card-title"><span style={{color: '#FF304F', fontWeight:'bold'}}>Kediri Town Square: Di Sini Impian dan Kegembiraan Saling Berpadu!</span></h6>
                                                <p className="card-text text-justify ms-0">Selamat datang di Kediri Town Square, tempat di mana semua impian Anda 
                                                akan diwujudkan! Dengan beragam toko modern, restoran yang menggugah selera, dan arena hiburan yang seru, kami 
                                                menghadirkan pengalaman berbelanja yang tak terlupakan. Jadi, siapkah Anda untuk menemukan mode terkini, menikmati 
                                                makanan lezat, dan menciptakan kenangan baru? Bersiaplah untuk merasakan kegiatan seru dan kegembiraan di Kediri 
                                                Town Square. Selamat berpetualang!</p>
                                                <a href="https://www.google.com" className="btn btn-primary">read more...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card col-lg-12 p-3 rounded-3">
                                <div className="row ">
                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h6 className="card-title text-right"><span style={{color: '#FF304F', fontWeight:'bold'}}>Belanja Seru dan Santai di Mall Kediri Town Square!</span></h6>
                                            <p className="card-text text-justify ms-0">tempat yang menawarkan pengalaman belanja yang tak terlupakan! Temukan 
                                            berbagai toko fashion terkini, restoran dengan cita rasa lezat, dan hiburan seru di dalamnya. Dari bazaar unik hingga 
                                            konser live, kami punya segala sesuatu yang membuat Anda betah. Nikmati jendela belanja dengan gaya terbaru, bersantap 
                                            di tempat makan favorit, dan temui kesenangan abadi di mall kami!</p>
                                            <a href="#" className="btn btn-primary">read more...</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="w-100 rounded-3" src="https://via.placeholder.com/350x350"/>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5 mb-2">
                                <h2>LAYANAN YANG DISEDIAKAN</h2>
                            </div>
                            
                            <div className="card col-lg-12 p-3 mb-4 mt-4 rounded-3">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <img className="w-100 rounded-3" src="https://via.placeholder.com/350x350"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h6 className="card-title"><span style={{color: '#FF304F', fontWeight:'bold'}}>Card Title</span></h6>
                                            <p className="card-text text-justify ms-0">Terima kasih sudah memilih Kediri Town Square, rumah modern para penikmat belanja dan hiburan. Layanan pelanggan 
                                            kami selalu siap berikan senyuman dan bantuan untuk membuat pengalaman belanja Anda tak terlupakan. Dari pertanyaan hingga keluhan, tim kami selalu 
                                            bersemangat melayani Anda dengan profesionalisme. Rasakan kehangatan dan keistimewaan saat berbelanja di Kediri Mall. Apa yang bisa kami bantu hari 
                                            ini? Stay fabulous and happy shopping! #KediriMall #CustomerFirst</p>
                                            <a href="#" className="btn btn-primary">read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card col-lg-12 p-3 mb-5 rounded-3">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h6 className="card-title text-right"><span style={{color: '#FF304F', fontWeight:'bold'}}>Card Title</span></h6>
                                            <p className="card-text text-justify ms-0">Segera nikmati pengalaman belanja yang tak terlupakan dan jangan lewatkan kesempatan untuk berinteraksi dengan
                                            tim ramah kami yang siap membantu setiap kebutuhan Anda. Dapatkan pengalaman belanja yang nyaman dan penuh keceriaan hanya di Kediri Mall, di mana 
                                            kepuasan Anda adalah prioritas utama kami. Selamat berbelanja!"</p>
                                            <a href="#" className="btn btn-primary">read more...</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="w-100 rounded-3" src="https://via.placeholder.com/350x350"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            

                <div className="container-fluid w-50 mt-5" id="Master">
                    <div className="card m-auto">
                        <div className="row">
                            <div className="col-4 m-auto ps-3 pb-3">
                                <img  className="card-image" src="./test.jpg" alt="" id='banner' />
                            </div>
                            <div className="col-8">
                                <h4 className="card-title mt-2 mb-4" id="banner">This is heading of horizontal card</h4>
                                <p className="card-text ms-0 mt-2" id="banner">Keeping connected to employees, staff, job candidates and recruits requires a lot of time and energy. It’s why many HR professionals frequently find themselves buried when managing day-to-day communications.</p>
                                <p className="card-text ms-0 mb-3">You can relate if you’ve spent hours on the phone or sent email blasts that never get read or responded to.</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="mt-5 row row-cols-md-3 row-cols-lg-3 row-cols-sm-1 justify-content-center">

                        
                        
                        <div className="col w-25">
                            <div className="card">
                                    <h4 className="card-header" id='headingcard'>header4</h4>
                                    <img  className="card-image m-auto mt-4" id='gambar' src="./test.jpg" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title mb-0" id='teksisi'>Wellcome</h2>
                                    <p className="lead text-justify ms-0 mt-0">this is something about paragraph.....</p>
                                </div>
                            </div>
                        </div>

                        

                        <div className="col w-25">
                            <div className="card">
                                    <h4 className="card-header" id='headingcard'>header5</h4>
                                    <img  className="card-image m-auto mt-4" id='gambar' src="./test.jpg" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title mb-0" id='teksisi'>Wellcome</h2>
                                    <p className="lead text-justify ms-0 mt-0">this is something about paragraph.....</p>
                                </div>
                            </div>
                        </div>

                        

                        <div className="col w-25 mb-5">
                            <div className="card">
                                    <h4 className="card-header" id='headingcard'>header6</h4>
                                    <img  className="card-image m-auto mt-4" id='gambar' src="./test.jpg" alt="" />
                                <div className="card-body">
                                    <h2 className="card-title mb-0" id='teksisi'>Wellcome</h2>
                                    <p className="lead text-justify ms-0 mt-0">this is something about paragraph.....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Header></Header>
                <div className="promo text-center">
                    <h1>PROMO</h1>
                </div>
            {/* <div className="container col justify-content-center mt-0 bg-transparent" id="promo">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img className="card-border-0 img" src="./fruits.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
                
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img src="./payless.jpg" alt="" className="card-border-0 img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img src="./gamefun.jpg" alt="" className="card-border-0 img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img src="./gamefun2.jpg" alt="" className="card-border-0 img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img src="./gamefun2.jpg" alt="" className="card-border-0 img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg- border-0 bg-transparent text-white">
                    <img src="./gamefun2.jpg" alt="" className="card-border-0 img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div> */}
            <div className="container text-center bg-transparent">
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-2">
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                    <div className="col">
                        <img src="./test.jpg" className="kolom p-3" style={{maxWidth:280, maxheight:280}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home 