import { useState } from 'react'
import Home from './pages/Home.jsx'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Invoiceform from './pages/Invoiceform.jsx'
import AddedItems from './pages/AddedItems.jsx'



function App() {
  

  return (
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/invoiceform' element={<Invoiceform/>}/>
         <Route path='/addeditems' element={<AddedItems/>}/>
         
        </Routes>
    </BrowserRouter>
  )
}

export default App
