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
                            <button className='button-add-item'>ADD ITEM &#8594;</button>
                        </div>
                <div className='item-list-content-2'>
                        
                        
                        
                        </div>        
                        
            </div>
        </div>
    );
}
export default AddedItems;