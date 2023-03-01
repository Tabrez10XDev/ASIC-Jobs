import { COLOR_PICKER_SET,COMMON_LOADING,CREATE_EXPENSE_DATA,CREATE_EXPORT_DATA,CREATE_PAYMENT_DATA,CREATE_PURCHASE_DATA,CREATE_SELL_INVOICE_DATA,DELETE_EXPENSE_DATA,DELETE_EXPORT_DATA,DELETE_PAYMENT_DATA,DELETE_PURCHASE_DATA,DELETE_SELL_INVOICE_DATA,ERROR_HANDLING_DATA,GATE_SELL_INVOICE_DATA,GET_ALL_PINO_LIST,GET_EXPENSE_DATA,GET_EXPORT_DATA,GET_PAYMENT_DATA,GET_PRODUCT_LIST, GET_PURCHASE_DATA, GET_SETTING_API_DATA, GET_USER_PERMISSION_DATA} from "../actiontypes";
const initialState = {
  commonLoading:false,
  colorrdata:[],
  getSettingData:[],
  getProductList:[],
  createSellInvoice:[],
  getPiNoList:[],
  createPayment:[],
  createPurchase:[],
  createExpense:[],
  createExport:[],
  getSellInvoice:[],
  deleteSellInvoice:[],
  getInwardPayment:[],
  deleteInwardPayment:[],
  getPurchase:[],
  deletePurchase:[],

  getExpense:[],
  deleteExpense:[],
  
  getExport:[],
  deleteExport:[],

  errorHandling:[],

  userPermissionData:[]
};
export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case COMMON_LOADING:
      return {
        ...state,
        commonLoading: action.payload,
      };
      case GET_SETTING_API_DATA:
        return {
          ...state,
          getSettingData: action.payload,
        };
    case COLOR_PICKER_SET: {
      return {
        ...state,
        colorrdata: action.colorrdata
      };
    }
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        getProductList: action.payload
      };
    }
    case CREATE_SELL_INVOICE_DATA: {
      return {
        ...state,
        createSellInvoice: action.payload
      };
    }
    case GET_ALL_PINO_LIST: {
      return {
        ...state,
        getPiNoList: action.payload
      };
    }
    case CREATE_PAYMENT_DATA: {
      return {
        ...state,
        createPayment: action.payload
      };
    }
    case CREATE_PURCHASE_DATA: {
      return {
        ...state,
        createPurchase: action.payload
      };
    }
    case CREATE_EXPENSE_DATA: {
      return {
        ...state,
        createExpense: action.payload
      };
    }
    case CREATE_EXPORT_DATA: {
      return {
        ...state,
        createExport: action.payload
      };
    }
    case GATE_SELL_INVOICE_DATA: {
      return {
        ...state,
        getSellInvoice: action.payload
      };
    }
    case DELETE_SELL_INVOICE_DATA: {
      return {
        ...state,
        deleteSellInvoice: action.payload
      };
    }
    case GET_PAYMENT_DATA: {
      return {
        ...state,
        getInwardPayment: action.payload
      };
    }
    case DELETE_PAYMENT_DATA: {
      return {
        ...state,
        deleteInwardPayment: action.payload
      };
    }

    case GET_PURCHASE_DATA: {
      return {
        ...state,
        getPurchase: action.payload
      };
    }
    case DELETE_PURCHASE_DATA: {
      return {
        ...state,
        deletePurchase: action.payload
      };
    }

    
    case GET_EXPENSE_DATA: {
      return {
        ...state,
        getExpense: action.payload
      };
    }
    case DELETE_EXPENSE_DATA: {
      return {
        ...state,
        deleteExpense: action.payload
      };
    }

    
    case GET_EXPORT_DATA: {
      return {
        ...state,
        getExport: action.payload
      };
    }
    case DELETE_EXPORT_DATA: {
      return {
        ...state,
        deleteExport: action.payload
      };
    }

    case ERROR_HANDLING_DATA: {
      return {
        ...state,
        errorHandling: action.payload
      };
    }

    case GET_USER_PERMISSION_DATA: {
      return {
        ...state,
        userPermissionData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}