import { useState } from 'react'
import Home from './pages/Home.jsx'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Invoiceform from './pages/Invoiceform.jsx'
import AddedItems from './pages/AddedItems.jsx'
import {InvoiceProvider} from './components/InvoiceContext.jsx'
import DownloadPage from './pages/DownloadPage.jsx';



function App() {
  

  return (
    <InvoiceProvider>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/invoiceform' element={<Invoiceform/>}/>
         <Route path='/addeditems' element={<AddedItems/>}/>
         <Route path='/downloadpage' element={<DownloadPage/>}/>
         
        </Routes>
    </BrowserRouter>

    </InvoiceProvider>
    
  )
}

export default App
