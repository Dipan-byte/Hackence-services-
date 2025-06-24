import {Document ,Page , View , Text , StyleSheet} from '@react-pdf/renderer'
export const DownloadPagePdf = ({formData , itemList}) => {
    const styles = StyleSheet.create({
        heading: {
            textAlign : "center" ,
        } ,
    })
    return(
        <Document>
            <Page size="A4">
               
                    <Text style={styles.heading}>
                        INVOICE 
                    </Text>
                
            </Page>
        </Document>
    )
}