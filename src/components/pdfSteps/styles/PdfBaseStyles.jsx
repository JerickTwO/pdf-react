import { StyleSheet } from '@react-pdf/renderer';

// REGISTRO DE FUENTES
const styles = StyleSheet.create({
    page: {
        fontSize: 10,
    },
    container: {
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '20px 40px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },

    header: {
        textAlign: 'center',
    },

    headerSection: {

        marginBottom: 10,
    },

    banner: {
        width: '85vw',
        height: 'auto',
    },

    footerText: {
        fontSize: 8,
        position: 'absolute',
        bottom: -240,
        paddingHorizontal: 40,
        left: 0,
        right: 0,
        fontWeight: 'bold'

    },

    headerText: {
        fontSize: 7,
        fontStyle: 'italic',
    },

    hr: {
        marginTop: 10,
        marginBottom: 10,
        borderBottom: '1px solid #000',
    },
    footerInfo: {
        textAlign: 'right',
        fontSize: 10,
        marginTop: 10,
    },
});

export default styles;
