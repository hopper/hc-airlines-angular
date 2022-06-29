import { I18n } from "./i18n.interface";

export const locale: I18n = {
    lang: 'es',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm'
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Cancele su vuelo en cualquier momento, por cualquier motivo.",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            BUTTON: {
                SELECT: "Seleccione"
            }
        },
        CFAR_OFFER_DIALOG: {
            TITLE: "Cancelar por cualquier motivo",
            POWERED_BY: "Impulsado por Hopper",
            VIEW_DETAILS: "Ver detalles",
            BUTTON: {
                CANCEL: "Continuar sin cobertura",
                SUBMIT: "Continuar con {{ coverage }} de cobertura"
            },
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            TERMS_WARNING: "Si no agrega esto, su boleto no es reembolsable",
            TERMS_LINK_TEXT: "Términos y condiciones"
        },
        CFAR_EXERCISE_DIALOG: {
            TITLE: "Cancelar vuelo",
            SUBTITLE: "Cancelar por cualquier motivo",
            DEADLINE_SENTENCE_1: "Cancela tu reserva sin cargo hasta ",
            DEADLINE_SENTENCE_2: "Recibirá un correo electrónico de confirmación y se actualizará el estado del viaje.",
            TO: " a ",
            DEPARTURE: "Salida:",
            ARRIVAL: "Llegada:",
            FLIGHT: "Vuelo:",
            PASSENGER: "{{ nbPassenger }} pasajero",
            PASSENGERS: "{{ nbPassenger }} pasajeros",
            CHOOSE_REFUND_TYPE: "Elija su tipo de reembolso",
            HOPPER_REFUND: "Reembolso Hopper",
            AIRLINE_REFUND: "Reembolso de la aerolínea",
            METHOD: "Método:",
            AMOUNT: "Cantidad:",
            REFUND_METHOD: "Método de reembolso",
            BUTTON: {
                CANCEL: "Cancelar",
                SUBMIT: "Sí, cancelar vuelo"
            },
            NO_CONTRACT: "No hay contrato disponible",
            LOADING: "Cargando en curso..."
        }
    }
}