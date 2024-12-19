
import PdfBase from './PdfBase';
import { PDFViewer, Text, View } from '@react-pdf/renderer';
import styles from './styles/PdfFourStyles';
import { getFullWrittenDateTimeFromInput, getWrittenDate, getYear } from '../../utils/Dates';

const PdfThree = () => {
    const anio = getYear();
    const applicationDate = getFullWrittenDateTimeFromInput("2024-12-01 22:06:49");
    const actualData = getWrittenDate();
    const juryAppointment = {
        anio: anio,
        actualData: actualData,
        applicationDate: applicationDate,
        id: 123,
        title: 'Análisis de Algoritmos en Redes Neuronales',
        projectSimilarity: 18,
        engineeringFaculty: {
            dni: 123456789,
            firstName: "Joel",
            middleName: "Jose",
            lastName: "Huacan",
            carrer: {
                name: "Ingeniería de Sistemas",
            }
        },
        asesor: {
            dni: 123456784,
            firstName: "Juan",
            middleName: "Anyel",
            lastName: "Paztos",
            carrer: {
                name: "Ingeniería de Sistemas",
            }
        },
        coAsesor: {
            dni: 123456754,
            firstName: "Jerick",
            middleName: "Johan",
            lastName: "Patiño",
            carrer: {
                name: "Ingeniería de Sistemas",
            }
        },
        student: {
            firstName: 'Juan Carlos',
            lastName: 'Perez Gomez',
            dni: '12345678',
            studentCode: '2024001',
            career: {
                name: 'Ingeniería de Sistemas',
            },
        },
    };
    console.log(applicationDate);

    return (

        <PDFViewer style={{ width: '100vw', height: '100vh' }}>

            <PdfBase showCommemorativeText={true} commemorativeText={`“Año del Bicentenario, de la consolidación de nuestra Independencia, y de la conmemoración 
de las Heroicas de Junín y Ayacucho”
`}>

                {/* Fecha y número de carta */}
                <View style={styles.section}>
                    <Text style={styles.text}>
                        Tamburco, <Text style={styles.bold}>25 de enero del 2024</Text>
                    </Text>
                    <Text style={styles.text}>
                        CARTA MÚLTIPLE N° <Text style={styles.bold}>001-2024-DI-FI-UNAMBA</Text>
                    </Text>
                </View>

                {/* Dirigido a */}
                <View style={styles.section}>
                    <Text style={styles.bold}>
                        SEÑORES: Jurados Evaluadores de Tesis de la EAP. Ingeniería de Minas
                    </Text>
                    <Text>Dr. Edwar Ilasaca Cahuata - Presidente</Text>
                    <Text>Dr. Edgar Zenón Vilca Mansilla - Primer Miembro</Text>
                    <Text>Mtro. Diómedes N. Ferral Sarmiento - Segundo Miembro</Text>
                </View>

                {/* Asunto */}
                <View style={styles.section}>
                    <Text>
                        ASUNTO: Remito Informe de Tesis del Bach.{' '}
                        <Text style={styles.bold}>Diofanto Honorato CONTRERAS PACORBO</Text>, para su PRIMERA revisión.
                    </Text>
                </View>

                {/* Referencias */}
                <View style={styles.section}>
                    <Text>Ref.:</Text>
                    <Text>• SOLICITUD de fecha <Text style={styles.bold}>25 de enero del 2024</Text></Text>
                    <Text>• RESOLUCIÓN DECANAL N° <Text style={styles.bold}>013-2023-DFI-UNAMBA</Text></Text>
                    <Text>• RESOLUCIÓN DECANAL N° <Text style={styles.bold}>227-2022-DFI-UNAMBA</Text></Text>
                    <Text style={styles.bold}>REG. N° 016</Text>
                </View>

                {/* Cuerpo del texto */}
                <View style={styles.section}>
                    <Text style={styles.text}>
                        Por el presente comunico a ustedes que, en cumplimiento del Art 30 del Reglamento de Investigación vigente, se remite los documentos y las Resoluciones de la referencia y un ejemplar de la tesis titulada:
                    </Text>
                    <Text style={styles.bold}>
                        "Diseño de malla de perforación y voladura para evaluar su incidencia en la fragmentación y costos operativos, en la profundización de la rampa 440, Cía. Minera Aurífera Cuatro de Enero S.A. (MACDESA) – Arequipa, 2022".
                    </Text>
                    <Text style={styles.text}>
                        En ese sentido, remito dicho expediente para su
                    </Text>
                    <Text style={styles.bold}>PRIMERA</Text>
                    <Text>
                        revisión conforme indica el
                    </Text>
                    <Text style={styles.bold}>Art 31 del Reglamento de Investigación. </Text>
                    <Text style={styles.underline}>“Una vez recibido los trabajos de investigación o tesis, por los jurados evaluadores, se procederá a evaluar en forma y fondo en un plazo máximo de 15 días hábiles. Los miembros del jurado están obligados a participar en las diferentes etapas de la revisión del informe”; su incumplimiento constituye falta sujeta a sanción prevista en el estatuto de la UNAMBA y normas conexas.</Text>
                    <Text>Sin otro en particular, aprovecho la oportunidad para expresarle las muestras de mi especial consideración y deferencia personal.</Text>
                </View>

            </PdfBase>
        </PDFViewer>
    );
};

export default PdfThree;
