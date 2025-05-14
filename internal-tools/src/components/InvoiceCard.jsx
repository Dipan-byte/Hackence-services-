import './components.css'
import React ,{useState} from 'react'
import Invoiceform from './Invoiceform.jsx'
function InvoiceCard({onCardClick}){
   
    return(

       <div className="card-container" onClick= { onCardClick}  >
            <img className="invoice-image"
            src="src/assets/invoice (1).png" alt="wait!" />
            <p>GENERATE INVOICE &#8618;</p>
       </div>
    )
}
export default InvoiceCard ;