export const BASEURL = 'http://52.204.70.47/api/';
export const API_ACCESS_KEY = '';
export const FIREBASE_URL = 'https://fcm.googleapis.com/fcm/send';

const APIURLS = {
    SIGNIN: `${BASEURL}login`,
    GET_SETTING_API: `${BASEURL}staticsettings`,
    GET_USER_PERMISSION_API: `${BASEURL}userpermission`,
    GET_PRODUCT_API: `${BASEURL}getproducts`,
    ADD_PRODUCT_API: `${BASEURL}addproduct`,
    CREATE_SELL_INVOICE: `${BASEURL}createsellinvoice`,
    GET_ALL_PINO: `${BASEURL}getallpino`,
    CREATE_PAYMENT: `${BASEURL}createpayment`,
    CREATE_PURCHASE: `${BASEURL}createpurchase`,
    CREATE_EXPENSE: `${BASEURL}createexpense`,
    CREATE_EXPORT: `${BASEURL}createexport`,
    GET_SELL_INVOICE: `${BASEURL}getallsellinvoice`,
    DELETE_SELL_INVOICE: `${BASEURL}deletesellinvoice`,
    UPDATE_SELL_INVOICE: `${BASEURL}updatesellinvoice`,
    GET_PAYMENT: `${BASEURL}getallpayment`,
    DELETE_PAYMENT: `${BASEURL}deletepayment`,
    UPDATE_PAYMENT: `${BASEURL}updatepayment`,

    GET_PURCHASE: `${BASEURL}getallpurchase`,
    DELETE_PURCHASE: `${BASEURL}deletepurchase`,
    UPDATE_PURCHASE: `${BASEURL}updatepurchase`,

    GET_EXPENSE: `${BASEURL}getallexpense`,
    DELETE_EXPENSE: `${BASEURL}deleteexpense`,
    UPDATE_EXPENSE: `${BASEURL}updateexpense`,

    GET_EXPORT: `${BASEURL}getallexport`,
    DELETE_EXPORT: `${BASEURL}deleteexport`,
    UPDATE_EXPORT: `${BASEURL}updateexport`,
}

export default APIURLS;