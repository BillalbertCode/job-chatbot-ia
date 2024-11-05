"use client"
import { Document, Page, Text, View } from "@react-pdf/renderer";

const Example = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>ejemplo</Text>
                </View>
            </Page>
        </Document>
    )
}

export default Example