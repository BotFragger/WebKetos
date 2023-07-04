import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Foodcourt.css';

const FoodCourt = () => {
    return (
        <>
            <div className='carousel-caption fs-5 text-block text-center' id='makan'>
                <p className="foodcourt m-auto">FOODCOURT</p>
            </div>
            <div className="container rounded-0 bg-transparent ms-0 p-0" id="pict">
                <img src="./foodcourt.jpg" className="ms-0 mt-5 mx-auto" alt="..." id='img4'/>
            </div>
          {/* <ul>
            <div className="col mt-5">

              <li className="card grid-card mt-5">
                <div className="photo" data-name="GRID"></div>
                <h5 className="title">Grid Card</h5>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <span className="meta">Post Date</span>
              </li>
            </div>

            <div className="col mt-5">
              <li className="card flex-card mt-5" style={{height:272}}>
                <div className="photo" data-name="FLEX"></div>
                <div className="data">
                  <h5 className="title">Flexbox Card 1</h5>
                  <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <span className="meta">Post Date</span>
                </div>
              </li>
            </div>
            
            <div className="col mt-5">
              <li className="card grid-card">
                <div className="photo" data-name="GRID"></div>
                <h5 className="title">Grid Card</h5>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <span className="meta">Post Date</span>
              </li>
            </div>
            <div className="col mt-5">
              <li className="card flex-card" style={{height:272}}>
                <div className="photo" data-name="FLEX"></div>
                <div className="data">
                  <h5 className="title">Flexbox Card</h5>
                  <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <span className="meta">Post Date</span>
                </div>
              </li>
            </div>
          </ul> */}

        </>
    )
}

export default FoodCourt