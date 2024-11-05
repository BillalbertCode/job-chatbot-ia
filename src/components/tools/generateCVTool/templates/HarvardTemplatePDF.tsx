import { Document, Page, Text } from "@react-pdf/renderer";

const HarvardTemplatePDF = () => {
    return (
        <Document>
            <Page size="A4">
                <Text>Hola soy omelo chino</Text>
            </Page>
        </Document>
    )
}

export default HarvardTemplatePDF