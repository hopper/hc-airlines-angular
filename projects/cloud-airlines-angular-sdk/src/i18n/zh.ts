import { I18n } from "./i18n.interface";

export const locale: I18n = {
    lang: 'zh',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm'
        },
        CFAR_CONTRACT_CHOICE: {
            TITLE: "随时以任何理由取消您的航班。",
            PRICE: "添加 {{ price }}"
        },
        CFAR_CONTRACT_DIALOG: {
            TITLE: "出于任何原因取消",
            POWERED_BY: "由 Hopper 提供支持",
            VIEW_DETAILS: "查看详情",
            BUTTON: {
                CANCEL: "拒绝覆盖",
                SUBMIT: "获得 {{ percentage }} 覆盖率 | {{ price }}"
            }
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
                SUBMIT: "提交"
            }
        }
    }
}