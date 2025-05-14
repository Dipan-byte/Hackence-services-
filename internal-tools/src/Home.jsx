import './Home.css'
import InvoiceCard from './components/InvoiceCard'
function Home(){
    return(
        <>
        <div className='body-wrapper'>
            <div className='header'>
                    <p>HACKENESE SERVICES</p>
            </div>
            <div className='card-wrapper'>
                    <>
                        <InvoiceCard />
                        <InvoiceCard />
                    
                    </>
                    
            </div>
            <div></div>
        </div>
        
        </>
    )
}
export default Home 