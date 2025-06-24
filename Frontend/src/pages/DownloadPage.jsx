import { useInvoiceData } from "../components/InvoiceContext.jsx"
import {PDFViewer} from '@react-pdf/renderer'
import { DownloadPagePdf } from "../components/DownloadPagePdf.jsx"
function DownloadPage() {
    const {itemList , formData} = useInvoiceData() 
    return(
        <div>
                    <PDFViewer width= "100%" height="600">
             <DownloadPagePdf  itemList={itemList} formData={formData} />
        </PDFViewer>
        </div>

    )
}
export default DownloadPage 