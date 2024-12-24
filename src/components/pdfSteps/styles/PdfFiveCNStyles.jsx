import { StyleSheet } from '@react-pdf/renderer';

// Style Sheet
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        fontFamily: 'Times-Roman',
        padding: '35px 60px',
    },
    bold: {
        fontFamily: 'Times-Bold',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textHeader: {
        fontSize: 18,
        paddingHorizontal: 70,
        textAlign: 'center',
        marginBottom: 5,
    },
    logo: {
        objectFit: 'fill',
        width: '8cm',
        height: '2cm',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        borderTop: '1px dashed #000',
        paddingHorizontal: 70,
        paddingTop: 25,
        textAlign: 'center',
    },
    body: {
        textAlign: 'justify',
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 1.5,
    },
    footerBody:{
        fontSize: 16,
        textAlign: 'right',
    },
    headerText: {
        fontSize: 7,
        fontStyle: 'italic',
    },
    footerText: {
        fontSize: 8,
        position: 'absolute',
        bottom: 15,
        paddingHorizontal: 40,
        left: 0,
        right: 0,
        fontFamily: 'Times-Bold'
    },
    hr: {
        marginTop: 10,
        marginBottom: 10,
        borderBottom: '2.5pt solid #000',
    },
    footerInfo: {
        textAlign: 'right',
        fontSize: 10,
        marginTop: 10,
    },
});
export default styles;