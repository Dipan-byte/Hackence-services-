import { useInvoiceData } from "../components/InvoiceContext.jsx"
import {PDFViewer , PDFDownloadLink} from '@react-pdf/renderer'
import { DownloadPagePdf } from "../components/DownloadPagePdf.jsx"
function DownloadPage() {
    const {itemList , formData} = useInvoiceData() 
    return(
        <div className="pdf-body">
            <div className="pdf-container">
             <PDFViewer width= "100%" height="100%">
                    <DownloadPagePdf  itemList={itemList} formData={formData} />
             </PDFViewer>
             <div className="pdf-download-button">
                <PDFDownloadLink
                    document = {<DownloadPagePdf itemList ={ itemList} formData={formData}/>}
                    fileName='invoice.pdf'
                >
                    {
                        ({loading}) => loading ? (<button disabled>Generating.....</button>) : (<button> DOWNLOAD PDF </button>)
                    }
                </PDFDownloadLink>
             </div>

            </div>


        </div>

    )
}
export default DownloadPage 