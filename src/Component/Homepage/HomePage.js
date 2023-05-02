import React from 'react';
import Navbar from './Navbar';
import Crousal from './Crousal';
// import LoginForm from './LoginForm';
import Footer from './Footer'
import AdminLogin from './adminLogin';
import {Route, Routes } from 'react-router-dom';
import Agro from './Agro';
import Inquiry from './Inquiry';
import OrderNow from './OrderNow';

export default function HomePage() {
  return (
    <>
    <Navbar/>
    
        <Routes>
        <Route exact path="/inquiry" element={<Inquiry/>} />
        <Route exact path="/agro" element={<Agro />} />
        <Route exact path="/mainfooterforcall" element={<Footer/>} />
        {/* <Route exact path="/farmhouse" element={<Farmhouse/>} /> */}
        <Route exact path="/adminLogin" element={<AdminLogin/>} />
        {/* <Route exact path='/login' element={<LoginForm/>} /> */}
        <Route exact path='/' element={ <> <Crousal/> <OrderNow/> <Footer/>  </>} />
        </Routes>
    </>
  )
}
