import React,{useState , useEffect} from 'react';
import {useInvoiceData}  from '../components/InvoiceContext.jsx'
import { InvoiceTable } from '../components/invoiceTable.jsx';
import { useNavigate } from 'react-router-dom';
function AddedItems(){
       const { setitemList } = useInvoiceData()
       const navigate = useNavigate()
       const handlebacktoinvoiceformbutton =()=>{
        return(
            navigate('/invoiceform')
        )
       }
       const  handlesubmit = () => {
        return (
            navigate('/downloadpage')
        )
       }
       
     const [ item , setitem ] = useState("")
        function handleitem(e){
                setitem(e.target.value);
        }
        const [quantity , setquantity]=useState("")
        function handlequantity(e){
            setquantity(e.target.value);
        }
        const [cost , setcost]=useState("")
        function handlecost(e){
            setcost(e.target.value);
    
        }
        const [itemdetail,setitemdetail]=useState([]);
        function handlesetitemdetail(){
            if(item && quantity && cost){
                const itemobject = {
                    newitem : item ,
                    newquantity : quantity ,
                    newcost : cost ,
                    newtotal : cost*quantity ,

                }
                setitemdetail([...itemdetail, itemobject]);
                setitem("");
                setquantity("");
                setcost("");
            }
            else if(item && quantity){
                window.alert('please fill cost area');
            }
             else if(cost && quantity){
                window.alert('please fill item area');
            }
             else if(item && cost){
                window.alert('please fill quantity area');
            }
            else if(item){
                window.alert('please fill cost  and quantity');
            }
             else if(cost){
                window.alert('please fill item and quantity');
            }
             else if(quantity){
                window.alert('please fill item and cost');
            }
            else{
                window.alert('please fill all the areas');
            }
        }
        useEffect(() => { setitemList(itemdetail)} , 
                        [itemdetail]
       )
        // function handleremoveitem(index){
        //     itemdetail.filter((item,index)=>{
        //         item[i]==!index
        //     })
        // }


    return(
        <div className='list-item-body'>
            <div className="item-list-container">
            <div className="item-list-title">
                <p>ITEMS ADDED</p>
            </div>
            <div className="item-list-content">
                <div className='item-list-content-input'>
                           <div className='item-list-content-input-box'>
                                <label className='item-list-label'>ITEM: </label> 
                                <input className='item-list-input' type='text' placeholder='ENTER ITEM' value={item}  onChange={handleitem} />
                    
                                <label className='item-list-label'>QUANTITY:</label> 
                                <input type='number' className='item-list-input' placeholder='ENTER QUANTITY' value={quantity}  onChange={handlequantity} />
                        
                                <label className='item-list-label' >COST:</label> 
                                <input type='number' className='item-list-input' placeholder='ENTER COST' value={cost}  onChange={handlecost} />
                            </div> 
                            <div className='item-list-content-input-button'>
                                <button className='button-add-item' onClick={handlesetitemdetail}>ADD ITEM &#8594;</button>
                            </div>
                        </div>
 
                    <div>
                        <InvoiceTable/>
                    </div>
                    <div>
                        <button onClick={handlebacktoinvoiceformbutton}>BACK</button>
                        <button onClick={handlesubmit}>SUBMIT</button>
                    </div>

            </div>
        </div>

        </div>
    );
}
export default AddedItems;