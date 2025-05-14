import './components.css'
import React ,{useState} from 'react'
import Invoiceform from './Invoiceform.jsx'
function InvoiceCard(){
    const [showForm , setShowForm] = useState(false);
    function handleShowForm(){
        setShowForm(true);
        console.log(showForm)

    }
    
    return(
       <div className="card-container" onClick= { handleShowForm}  >
            <img className="invoice-image"
            src="src/assets/invoice (1).png" alt="wait!" />
            <p>GENERATE INVOICE &#8618;</p>
            {showForm && <Invoiceform />}
       </div>
    )
}
export default InvoiceCard ;