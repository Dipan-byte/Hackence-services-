import './Home.css'
import AddedItems from './AddedItems.jsx'
import InvoiceCard from '../components/InvoiceCard.jsx'
import Invoiceform from './Invoiceform.jsx'
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Home(){
    const navigate = useNavigate()
    
    // const [showForm , setShowForm] = useState(false);
        function handleShowForm(){
            // setShowForm(true)
            // console.log(showForm)
            navigate("/invoiceform")
             };
        // function handleHideForm(){ 
        //     setShowForm(false);
        // }
    return(
        <>
        <div className='body-wrapper'>
            <div className='header'>
                    <p>HACKENESE SERVICES</p>
            </div>
            <div className='card-wrapper'>   
                <InvoiceCard onCardClick={handleShowForm} />
                {/* {showForm && <div className='positioning-container'> 
                    <Invoiceform onBackClick={handleHideForm} />
                    <AddedItems />
            </div>} */}
                    
            </div>
            <div></div>
        </div>
        
        </>
    )
}
export default Home 