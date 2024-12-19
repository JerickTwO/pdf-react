import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    h1: {
        textAlign: 'center',
        fontSize: 12,
        marginVertical: 32,
        marginTop: 2,
        fontWeight: 'bold'
    },
    p: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'justify',
    },
    // Table Styles
    table: {
        display: 'table',
        width: 'auto',
        alignItems: 'stretch',
        fontSize: 12,
        marginVertical: 20,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableColHeader: {
        width: '45%',
        padding: 1,

        fontWeight: 'bold',
    },

    tableCol: {
        width: '55%',
        padding: 1
    },
    // End Table Styles
    // Section Styles
    section: {
        fontSize: 12,
        textAlign: 'justify',
    },
    sectionFinal:
    {
        marginBottom: 109,
    },
    bold: {
        fontFamily: 'Times-Bold',
    },
    // End Section Styles

})
export default styles; 