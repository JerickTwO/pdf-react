import { PDFViewer } from '@react-pdf/renderer';
import PdfBase from './PdfBase';
import { Text, View } from '@react-pdf/renderer';
import styles from './styles/PdfTwoStyles';
import { getWrittenDate, getYear } from '../../utils/Dates';

const Pdfone = () => {
    const anio = getYear();
    const actualData = getWrittenDate();

    const reservation = {
        anio: anio,
        actualData: actualData,
        id: 123,
        title: 'Análisis de Algoritmos en Redes Neuronales',
        projectSimilarity: 18,
        student: {
            firstNames: 'Juan Carlos',
            lastName: 'Perez Gomez',
            dni: '12345678',
            studentCode: '2024001',
            career: {
                name: 'Ingeniería de Sistemas',
            },
        },
    };

    return (

        <PDFViewer style={{ width: '100vw', height: '100vh' }}>

            <PdfBase commemorativeText={false}>
                <Text style={styles.h1}>
                    INFORME Nº {reservation.id}-{anio}-D. UIFI-UNAMBA
                </Text>
                <View style={styles.table}>
                    {/* Row 1 */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>A</Text>
                        <View style={styles.tableCol}>
                            <Text>
                                <Text style={styles.bold}>:</Text> Dr. Franklin Aguirre Huillcas
                            </Text>
                            <Text>Decano de la Facultad de Ingeniería – UNAMBA</Text>
                        </View>
                    </View>

                    {/* Row 2 */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>ASUNTO</Text>
                        <View style={styles.tableCol}>
                            <Text>
                                <Text style={styles.bold}>:</Text>
                                <Text style={styles.bold}> Remito expediente para aprobación de Proyecto de Tesis.</Text>
                            </Text>
                        </View>
                    </View>

                    {/* Row 3 */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>REF.</Text>
                        <View style={styles.tableCol}>
                            <Text>
                                <Text style={styles.bold}>:</Text> SOLICITUD de
                                <Text> fecha 23 de febrero de 2024</Text>
                                <Text style={styles.bold}>                                            Reg. N° 080</Text>
                            </Text>
                            <Text>Anexo 4 (Docente Asesor)</Text>
                        </View>
                    </View>

                    {/* Row 4 */}
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>FECHA</Text>
                        <View style={styles.tableCol}>
                            <Text>
                                <Text style={styles.bold}>:</Text>{' '}
                                <Text>26 de febrero del 2024</Text>
                            </Text>
                        </View>
                    </View>
                    <Text>------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>
                <View style={styles.section}>
                    <Text>
                        Por intermedio del presente, me dirijo a usted, para informarle que,{' '}
                        <Text style={[styles.bold, styles.redText]}>Hidania Grimaldina</Text>{' '}
                        OSCCO SOTO identificada con DNI N° <Text style={styles.bold}>47660661</Text> y con código de matrícula N°{' '}
                        <Text style={styles.bold}>112153</Text> Bachiller de la{' '}
                        <Text style={styles.bold}>E.A.P. de Ingeniería Informática</Text> y Sistemas de la Facultad de Ingeniería, ha presentado el proyecto de tesis titulada:{' '}
                        <Text style={[styles.bold, styles.underline]}>
                            “Automatización de riego tecnificado por goteo, con el desarrollo e implementación de un software con tecnología Arduino, 2021”
                        </Text>
                        ; cuyo asesor es el <Text style={styles.bold}>Mg. Marleny Peralta Ascue</Text>; Co Asesor{' '}
                        <Text style={[styles.bold, styles.blueText]}>Yhon Fuentes Huaman</Text>, en cumplimiento con los requisitos exigidos para la{' '}
                        <Text style={styles.bold}>aprobación del proyecto de tesis</Text> según reglamento de investigación UNAMBA (Artículos{' '}
                        <Text style={styles.bold}>5, 7, 17, 24 y 27</Text>), adjunto los antecedentes que detallo a continuación:
                    </Text>
                </View>

            </PdfBase>
        </PDFViewer>
    );
};

export default Pdfone;
