export const I18N_SCHEMA = {
  type: 'object',
  properties: {
    COMMON: {
      type: 'object',
      properties: {
        DATE_FORMAT: {
          type: 'object',
          properties: {
            HOUR: {
              type: 'string',
            },
            DATE: {
              type: 'string',
            }
          },
          required: ['HOUR', 'DATE'],
        },
        BUTTON: {
          type: 'object',
          properties: {
            CLOSE: {
              type: 'string',
            },
          },
          required: ['CLOSE'],
        },
        TERMS_LINK_TEXT: {
          type: 'string',
        },
        COVERAGE_PERCENTAGE: {
          type: 'string',
        },
        COVERAGE_PERCENTAGE_ACCESSIBILITY: {
          type: 'string',
        },
        PRICE_PER_TRAVELER: {
          type: 'string',
        },
        INCL_TAXES: {
          type: 'string',
        },
      },
      required: [
        'DATE_FORMAT',
        'BUTTON',
        'TERMS_LINK_TEXT',
        'COVERAGE_PERCENTAGE',
        'COVERAGE_PERCENTAGE_ACCESSIBILITY',
        'PRICE_PER_TRAVELER',
        'INCL_TAXES',
      ],
    },
    CFAR_OFFER_BANNER: {
      type: 'object',
      properties: {
        TITLE: {
          type: 'string',
        },
        LOADING: {
          type: 'string',
        },
        BUTTON: {
          type: 'object',
          properties: {
            SELECT: {
              type: 'string',
            },
          },
          required: ['SELECT'],
        },
      },
      required: ['TITLE', 'LOADING', 'BUTTON'],
    },
    CFAR_OFFER_BANNER_LARGE: {
      type: 'object',
      properties: {
        TITLE: {
          type: 'string',
        },
        NO_COVERAGE_OPTION: {
          type: 'string',
        },
        WARNING_MESSAGE: {
          type: 'string',
        },
      },
      required: ['TITLE', 'NO_COVERAGE_OPTION', 'WARNING_MESSAGE'],
    },
    CFAR_OFFER_DIALOG: {
      type: 'object',
      properties: {
        TITLE: {
          type: 'string',
        },
        VIEW_DETAILS: {
          type: 'string',
        },
        BUTTON: {
          type: 'object',
          properties: {
            CANCEL: {
              type: 'string',
            },
            SUBMIT: {
              type: 'string',
            },
          },
          required: ['CANCEL', 'SUBMIT'],
        },
        NO_OFFERS: {
          type: 'string',
        },
        LOADING: {
          type: 'string',
        },
      },
      required: ['TITLE', 'VIEW_DETAILS', 'BUTTON', 'NO_OFFERS', 'LOADING'],
    }
  },
  required: [
    'COMMON',
    'CFAR_OFFER_BANNER',
    'CFAR_OFFER_BANNER_LARGE',
    'CFAR_OFFER_DIALOG'
  ],
};
