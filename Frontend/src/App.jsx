import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Login  from "./Component/Login/Login";
import Register from './Component/Register/Register'
import Home from './Component/Home/Home'


function App() {
  

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={< Login/>} />
                <Route path="/home" element={< Home/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
