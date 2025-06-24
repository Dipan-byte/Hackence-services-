import {useInvoiceData} from './InvoiceContext.jsx'
export const InvoiceTable =() => {
        const {itemList} = useInvoiceData()
        return(
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                   { itemList.map(( item , index) => {
                        return (<tr key={index}>
                        <td>{item.newitem}</td>
                        <td>{item.newquantity}</td>
                        <td>{item.newcost}</td>
                        <td>{item.newtotal}</td>
                    </tr> ) })}
                </tbody>
            </table>
        )
}
