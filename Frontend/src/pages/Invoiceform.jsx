
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useInvoiceData} from '../components/InvoiceContext.jsx'
function Invoiceform(){
    const navigate = useNavigate()
    const {setformData } = useInvoiceData()
    function handleBackClick(){
        navigate("/")
    }
    function handlecontinuebutton(){
        
        if( date && quotenum && validuntil && institutionname && ownername && contactnum && address){
            const value ={
                newdate : date ,
                newquotenum : quotenum ,
                newvaliduntil : validuntil ,
                newinstitutionname : institutionname ,
                newOwnername : ownername ,
                newcontactnum : contactnum ,
                newaddress : address , 
            }
            setformData(value)
            navigate("/addeditems")
        }

    }

    const today= new Date().toISOString().split("T")[0];
    const [ date , setdate ] = useState(today)
    function handleDate(e){
            setdate(e.target.value);
    }
    const [quotenum , setquotenum]=useState("")
    function handlequotenum(e){
        setquotenum(e.target.value);
    }
    const [validuntil , setvaliduntil]=useState("")
    function handlevaliduntil(e){
        setvaliduntil(e.target.value);
    }
   
    const [institutionname , setinstitutionname]= useState("");
    function handleinstitutionname(e){
        setinstitutionname(e.target.value);
    }
    const [ownername , setownername]= useState("");
    function handleownername(e){
        setownername(e.target.value);
    }
    const [contactnum , setcontactnum]=useState("");
    function handlecontactnum(e){
        setcontactnum(e.target.value);
    }
    const [ address , setaddress]=useState("");
    function handleaddress(e){
        setaddress(e.target.value);
    }
    
    return(
        <div className='form-body'>
            <div className="form-container">
                <div className='form-title'>
                        <p>INVOICE FORM</p>
                </div>
                <div className='form-content'>
                        <div className='form-group'>
                            <label className='form-lable'>DATE:</label>
                            <input className='form-input' type='date' value={date}  onChange={handleDate} />
                        </div>
                        <div className='form-group'>
                            <label className='form-lable'>QUOTE NO: </label> 
                            <input type='text' className='form-input' placeholder='ENTER QUOTE NO' value={quotenum}  onChange={handlequotenum} />
                        </div>
                        <div className='form-group'>
                            <label className='form-lable'> VALID UNTIL: </label> 
                            <input type='date' className='form-input' value={validuntil}  onChange={handlevaliduntil} />
                        </div>
                        

                        <div className='form-group'>
                            <label className='form-lable'>NAME OF THE INSTITUTION: </label> 
                            <input type="text" className='form-input' placeholder='ENTER INSTITUTION NAME' value={institutionname} onChange={handleinstitutionname}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-lable'>NAME OF THE OWNER: </label> 
                            <input type='text' className='form-input' placeholder='ENTER OWNER NAME' value={ownername} onChange={handleownername}/>
                        </div>
                        <div className='form-group' >
                            <label className='form-lable'>CONTACT NO:</label> 
                            <input type="number" className='form-input' placeholder='ENTER CONTACT NUMBER' value={contactnum} onChange={handlecontactnum} />
                        </div>
                            <div className='form-group'>
                                <label className='form-lable'>ADDRESS:</label> 
                                <input type= "text" className='form-input' placeholder='ENTER ADDRESS' value={address} onChange={handleaddress} />
                            </div>               
                        
                </div>
                <div className='form-button-container'>
                    
                    <button onClick={handleBackClick}>BACK &#8617;</button>
                    <button onClick={handlecontinuebutton}>CONTINUE</button>
                    
                </div>
            </div>
        

        </div>
    );
}
export default Invoiceform ;