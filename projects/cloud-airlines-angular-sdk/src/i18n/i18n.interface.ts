export interface I18n {
    lang: string;
    data: {
        COMMON: {
            DATE_FORMAT: string;
            DATE_FORMAT_SHORT: string;
        },
        CFAR_OFFER_BANNER: {
            TITLE: string;
            NO_OFFERS: string;
            LOADING: string;
            BUTTON: {
                SELECT: string;
            }
        },
        CFAR_OFFER_DIALOG: {
            TITLE: string;
            POWERED_BY: string;
            VIEW_DETAILS: string;
            BUTTON: {
                CANCEL: string;
                SUBMIT: string;
            },
            NO_OFFERS: string;
            LOADING: string;
            TERMS_WARNING: string;
            TERMS_LINK_TEXT: string;
        },
        CFAR_EXERCISE_DIALOG: {
            TITLE: string;
            SUBTITLE: string;
            DEADLINE_SENTENCE_1: string;
            DEADLINE_SENTENCE_2: string;
            TO: string;
            DEPARTURE: string;
            ARRIVAL: string;
            FLIGHT: string;
            PASSENGER: string;
            PASSENGERS: string;
            CHOOSE_REFUND_TYPE: string;
            HOPPER_REFUND: string;
            AIRLINE_REFUND: string;
            METHOD: string;
            AMOUNT: string;
            REFUND_METHOD: string;
            BUTTON: {
                CANCEL: string;
                SUBMIT: string;
            },
            NO_CONTRACT: string;
            LOADING: string;
        }
    }
}