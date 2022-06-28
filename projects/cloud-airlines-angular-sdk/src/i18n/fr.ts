import { I18n } from "./i18n.interface";

export const locale: I18n = {
    lang: 'fr',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE d MMMM y à h:mm:ss z',
            DATE_FORMAT_SHORT: 'dd/MM/YYYY hh:mm'
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Annulez votre vol à tout moment, pour quelque raison que ce soit.",
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            BUTTON: {
                SELECT: "Sélectionner"
            }
        },
        CFAR_OFFER_DIALOG: {
            TITLE: "Annuler pour une raison quelconque",
            POWERED_BY: "Propulsé par Hopper",
            VIEW_DETAILS: "Voir détails",
            BUTTON: {
                CANCEL: "Refuser la couverture",
                SUBMIT: "Obtenez {{ percentage }} de couverture | {{ price }}"
            },
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours..."
        },
        CFAR_EXERCISE_DIALOG: {
            TITLE: "Annuler le vol",
            SUBTITLE: "Annuler pour une raison quelconque",
            DEADLINE_SENTENCE_1: "Annulez votre réservation sans frais jusqu'au ",
            DEADLINE_SENTENCE_2: "Vous recevrez un e-mail de confirmation et le statut du voyage sera mis à jour.",
            TO: " vers ",
            DEPARTURE: "Départ :",
            ARRIVAL: "Arrivée :",
            FLIGHT: "Vol :",
            PASSENGER: "{{ nbPassenger }} passager",
            PASSENGERS: "{{ nbPassenger }} passagers",
            CHOOSE_REFUND_TYPE: "Choisissez votre type de remboursement",
            HOPPER_REFUND: "Remboursement Hopper",
            AIRLINE_REFUND: "Remboursement de la compagnie aérienne",
            METHOD: "Méthode :",
            AMOUNT: "Montant :",
            REFUND_METHOD: "Mode de remboursement",
            BUTTON: {
                CANCEL: "Annuler",
                SUBMIT: "Valider"
            },
            NO_CONTRACT: "Aucun contrat disponible",
            LOADING: "Chargement en cours..."
        }
    }
}