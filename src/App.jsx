import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './komponen/Navbar'
import Home from './pages/Home'
import Bawah from './komponen/Bawah'
import Fashion from './pages/Fashion'
import Otomotif from './pages/Otomotif'
import FoodCourt from './pages/FoodCourt'
// import FoodCourt from './pages/Foodcourt'


function App() {
    return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/foodcourt" element={<FoodCourt />} />
          <Route path="/otomotif" element={<Otomotif />} />
        </Routes>
        <Bawah />
      </BrowserRouter>
    </>
  )
}

export default App
