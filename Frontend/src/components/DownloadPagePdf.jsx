import {Document ,Page , View , Text , StyleSheet} from '@react-pdf/renderer'
export const DownloadPagePdf = ({formData , itemList}) => {
    return(
        <Document>
            <Page size="A4">
                <View>
                    <Text>
                        {formData.newowner}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}