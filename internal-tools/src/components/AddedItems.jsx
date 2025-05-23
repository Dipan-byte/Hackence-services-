import React,{useState} from 'react';
function AddedItems(){
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
        }


    return(
        <div className="item-list-container">
            <div className="item-list-title">
                <p>ITEMS ADDED</p>
            </div>
            <div className="item-list-content">
                <div className='item-list-content-1'>
                            <label className='item-list-label'>ITEM: </label> 
                            <input className='item-list-input' type='text' placeholder='ENTER ITEM' value={item}  onChange={handleitem} />
                
                            <label className='item-list-label'>QUANTITY:</label> 
                            <input type='number' className='item-list-input' placeholder='ENTER QUANTITY' value={quantity}  onChange={handlequantity} />
                     
                            <label className='item-list-label' >COST:</label> 
                            <input type='number' className='item-list-input' placeholder='ENTER COST' value={cost}  onChange={handlecost} />
                            <button className='button-add-item' onClick={handlesetitemdetail}>ADD ITEM &#8594;</button>
                        </div>
                <div className='item-list-content-2'>
                        <span className='item-list-content-item'>ITME</span>
                        <span className='item-list-content-span'>QUANTITY</span>
                        <span className='item-list-content-span'>COST</span>
                        <span className='item-list-content-span'>TOTAL</span>
                        </div>        
                <div className='item-list-content-detail'>

                    </div>       
            </div>
        </div>
    );
}
export default AddedItems;