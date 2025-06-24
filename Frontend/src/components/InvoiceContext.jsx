import {useContext , useState , createContext} from 'react'

const InvoiceContext = createContext()
 export  const InvoiceProvider = ({children})=>{
    const [formData , setformData] = useState({})
    const[itemList , setitemList] = useState([])
     return(
        <InvoiceContext.Provider value={{formData , setformData , itemList , setitemList}}>
            {children}
        </InvoiceContext.Provider>
     )
 }

 export const useInvoiceData = () => useContext(InvoiceContext)