"use client"
import { Document, Page, Text, View } from "@react-pdf/renderer";

const HarvardTemplatePDF = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>Hola soy omelo chino</Text>
                </View>
            </Page>
        </Document>
    )
}

export default HarvardTemplatePDF