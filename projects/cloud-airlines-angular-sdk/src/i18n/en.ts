import { I18n } from "./i18n.interface";

export const locale: I18n = {
    lang: 'en',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm'
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Cancel your flight at any time, for any reason.",
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            BUTTON: {
                SELECT: 'Select'
            }
        },
        CFAR_OFFER_DIALOG: {
            TITLE: "Cancel For Any Reason",
            POWERED_BY: "Powered by Hopper",
            VIEW_DETAILS: "View details",
            BUTTON: {
                CANCEL: "Continue Without Coverage",
                SUBMIT: "Continue With {{ coverage }} Coverage"
            },
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            TERMS_WARNING: "If you don't add this, your ticket is non-refundable.",
            TERMS_LINK_TEXT: "Terms & Conditions"
        },
        CFAR_EXERCISE_DIALOG: {
            TITLE: "Cancel flight",
            SUBTITLE: "Cancel For Any Reason",
            DEADLINE_SENTENCE_1: "Cancel your booking free of charge until ",
            DEADLINE_SENTENCE_2: "You'll receive a confirmation email and the trip status will be updated.",
            TO: " to ",
            DEPARTURE: "Departure:",
            ARRIVAL: "Arrival:",
            FLIGHT: "Flight:",
            PASSENGER: "{{ nbPassenger }} passenger",
            PASSENGERS: "{{ nbPassenger }} passengers",
            CHOOSE_REFUND_TYPE: "Choose your refund type",
            HOPPER_REFUND: "Hopper refund",
            AIRLINE_REFUND: "Airline refund",
            METHOD: "Method:",
            AMOUNT: "Airline:",
            REFUND_METHOD: "Refund method",
            BUTTON: {
                CANCEL: "Cancel",
                SUBMIT: "Yes, cancel flight"
            },
            NO_CONTRACT: "No contract available",
            LOADING: "Loading in progress..."
        }
    }
}