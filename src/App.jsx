import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useState } from 'react'
import './Body.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './komponen/Navbar'
import Home from './pages/Home'
import Bawah from './komponen/Bawah'
import Fashion from './pages/Fashion'
import Otomotif from './pages/Otomotif'
import FoodCourt from './pages/FoodCourt'
import Eyewear from './pages/Eyewear'
import Electronic from './pages/Electronic'
import Essentials from './pages/Essentials'
// import Esential from './pages/Esential'
import Kids from './pages/Kids'
// import FoodCourt from './pages/Foodcourt'


function App() {
    return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/eyewear" element={<Eyewear />} />
            {/* <Route path="/foodcourt" element={<FoodCourt />} /> */}
            {/* <Route path="/otomotif" element={<Otomotif />} /> */}
            <Route path="/electronic" element={<Electronic />} />
            <Route path="/essentials" element={<Essentials />} />
          </Routes>
        <Bawah />
      </BrowserRouter>
    </>
  )
}

export default App
