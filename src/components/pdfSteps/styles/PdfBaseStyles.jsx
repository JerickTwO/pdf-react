import { StyleSheet, Font } from '@react-pdf/renderer';

// REGISTRO DE FUENTES
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc9.ttf', fontWeight: 'normal' }, // Normal
        { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4EsA.ttf', fontWeight: 'bold' }, // Bold
    ],
});
const styles = StyleSheet.create({
    page: {
        fontSize: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
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
