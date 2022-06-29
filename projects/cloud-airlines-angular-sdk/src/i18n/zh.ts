import { I18n } from "./i18n.interface";

export const locale: I18n = {
    lang: 'zh',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm'
        },
        CFAR_OFFER_BANNER: {
            TITLE: "随时以任何理由取消您的航班。",
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            BUTTON: {
                SELECT: "选择"
            }
        },
        CFAR_OFFER_DIALOG: {
            TITLE: "出于任何原因取消",
            POWERED_BY: "由 Hopper 提供支持",
            VIEW_DETAILS: "查看详情",
            BUTTON: {
                CANCEL: "继续无覆盖",
                SUBMIT: "继续覆盖 {{ coverage }}"
            },
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            TERMS_WARNING: "如果你不添加这个，你的票是不可退款的。",
            TERMS_LINK_TEXT: "条款和条件"
        },
        CFAR_EXERCISE_DIALOG: {
            TITLE: "取消航班",
            SUBTITLE: "出于任何原因取消",
            DEADLINE_SENTENCE_1: "免费取消您的预订，直到 ",
            DEADLINE_SENTENCE_2: "您将收到一封确认电子邮件，行程状态将更新。",
            TO: " 到 ",
            DEPARTURE: "离开：",
            ARRIVAL: "到达：",
            FLIGHT: "航班：",
            PASSENGER: "{{ nbPassenger }} 名乘客",
            PASSENGERS: "{{ nbPassenger }} 名乘客",
            CHOOSE_REFUND_TYPE: "选择您的退款类型",
            HOPPER_REFUND: "Hopper 退款",
            AIRLINE_REFUND: "航空公司退款",
            METHOD: "方法:",
            AMOUNT: "金额:",
            REFUND_METHOD: "退款方式",
            BUTTON: {
                CANCEL: "取消",
                SUBMIT: "是的，取消航班"
            },
            NO_CONTRACT: "没有可用的合同",
            LOADING: "正在加载..."
        }
    }
}