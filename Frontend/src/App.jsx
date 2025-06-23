import { useState } from 'react'
import Home from './pages/Home.jsx'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Invoiceform from './pages/Invoiceform.jsx'



function App() {
  

  return (
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Invoiceform' element={<Invoiceform/>}/>
         
        </Routes>
    </BrowserRouter>
  )
}

export default App
