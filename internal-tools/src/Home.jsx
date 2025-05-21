import './Home.css'
import AddedItems from './components/AddedItems.jsx';
import InvoiceCard from './components/InvoiceCard.jsx'
import Invoiceform from './components/Invoiceform.jsx'
import React ,{useState} from 'react'
function Home(){
    
    const [showForm , setShowForm] = useState(false);
        function handleShowForm(){
            setShowForm(true);
            console.log(showForm)
             };
        function handleHideForm(){ 
            setShowForm(false);
        }
    return(
        <>
        <div className='body-wrapper'>
            <div className='header'>
                    <p>HACKENESE SERVICES</p>
            </div>
            <div className='card-wrapper'>   
                <InvoiceCard onCardClick={handleShowForm} />
                {showForm && <div className='positioning-container'> 
                    {/* <Invoiceform onBackClick={handleHideForm} /> */}
                    <AddedItems />
            </div>}
                    
            </div>
            <div></div>
        </div>
        
        </>
    )
}
export default Home 