import { useInvoiceData } from "../components/InvoiceContext.jsx"
import {PDFViewer , PDFDownloadLink , pdf} from '@react-pdf/renderer'
import { DownloadPagePdf } from "../components/DownloadPagePdf.jsx"
import {saveAs } from 'file-saver'
function DownloadPage() {
    const {itemList , formData} = useInvoiceData() 
    // const handleDownload = async() =>{
    //     const blob = await pdf(<DownloadPagePdf formData={formData} itemList={itemList} />).toBlob();
    //        saveAs(blob, 'invoice.pdf');
    // }
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
                {/* <button onClick={handleDownload}>
                        DOWNLOAD PDF
                </button> */}
             </div>


            </div>


        </div>

    )
}
export default DownloadPage 