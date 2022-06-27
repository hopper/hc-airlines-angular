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
            PRICE: "Agregar por {{ price }}",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso..."
        },
        CFAR_CONTRACT_DIALOG: {
            TITLE: "Cancelar por cualquier motivo",
            POWERED_BY: "Impulsado por Hopper",
            VIEW_DETAILS: "Ver detalles",
            BUTTON: {
                CANCEL: "Rechazar Cobertura",
                SUBMIT: "Obtenga {{ percentage }} de cobertura | {{ price }}"
            },
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso..."
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
                SUBMIT: "Enviar"
            },
            NO_CONTRACT: "No hay contrato disponible",
            LOADING: "Cargando en curso..."
        }
    }
}