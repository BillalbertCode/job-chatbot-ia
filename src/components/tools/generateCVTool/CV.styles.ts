import { StyleSheet } from "@react-pdf/renderer";
// Styles for template on react pdf

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    subtitle: {
        maxWidth: "65%",
        fontSize: 14,
        fontWeight: 700,
    },
    text: {
        fontSize: 12,
    },
    textMediumBold: {
        fontSize: 12,
        fontWeight: 500,
    },
    textBold: {
        fontSize: 12,
        fontWeight: 700,
    },
    section: {
        marginVertical: 5,
    },
    titleSection: {
        fontSize: 14,
        textAlign: "center"
    },
    sectionChildren: {
        marginVertical: 5
    },
    justifyBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default styles