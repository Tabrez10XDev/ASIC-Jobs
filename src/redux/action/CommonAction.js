import { GET_PRODUCT_LIST, COLOR_PICKER_SET, CREATE_SELL_INVOICE_DATA, COMMON_LOADING, GET_ALL_PINO_LIST, GET_SETTING_API_DATA, CREATE_PAYMENT_DATA, CREATE_PURCHASE_DATA, CREATE_EXPENSE_DATA, CREATE_EXPORT_DATA, GATE_SELL_INVOICE_DATA, DELETE_SELL_INVOICE_DATA, GET_PAYMENT_DATA, DELETE_PAYMENT_DATA, GET_PURCHASE_DATA, DELETE_PURCHASE_DATA, GET_EXPENSE_DATA, DELETE_EXPENSE_DATA, GET_EXPORT_DATA, DELETE_EXPORT_DATA, ERROR_HANDLING_DATA, GET_USER_PERMISSION_DATA } from "../actiontypes";
import { apiPostMethod, apiGetMethod, apiDeleteMethod, apiPutMethod } from '../../api';
import APIURLS from '../../api/ApiUrls';
import { Strings } from "../../utils";

export const commonLoading_Action = (loading = true) => dispatch => {
    dispatch({ type: COMMON_LOADING, payload: loading });
  };

export const color_picker_set_action = (data) => dispatch => {
      dispatch({ type: COLOR_PICKER_SET, colorrdata: data });
}

export const error_handling_action = (status=false,data=null) => dispatch => {
    if(status){
        dispatch({ type: ERROR_HANDLING_DATA, payload: [] })
    }else{
    if(!data){
        data = {'status':"error","message":Strings.common.wrongErrorMessage}
    }
        dispatch({ type: ERROR_HANDLING_DATA, payload: data });
}
  }

export const getSetting_Action = (status=false) => dispatch => {
        var apipoint = APIURLS.GET_SETTING_API
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                console.log(response)
                dispatch({ type: GET_SETTING_API_DATA, payload: response })
            })
            .catch((error) => {
              
                dispatch({ type: GET_SETTING_API_DATA, payload: [] })
                dispatch(error_handling_action());
            })
   
};

export const getUserPermission_Action = (id) => dispatch => {
    var apipoint = APIURLS.GET_USER_PERMISSION_API+'/'+id;
    apiGetMethod({ endpoint: apipoint })
        .then((response) => {
            console.log("=-=-",response?.data?.permission)

            let string = response?.data?.permission;
            const permissionArray = string.split(',');
         
            dispatch({ type: GET_USER_PERMISSION_DATA, payload: permissionArray })
        })
        .catch((error) => {
            dispatch({ type: GET_USER_PERMISSION_DATA, payload: [] })
            dispatch(error_handling_action());
        })

};

export const getProduct_action = () => dispatch => {
    dispatch(commonLoading_Action(true)) 
  var apipoint = APIURLS.GET_PRODUCT_API
  apiGetMethod({ endpoint: apipoint })
      .then((response) => {
          dispatch({ type: GET_PRODUCT_LIST, payload: response?.data })
      })
      .catch((error) => {
          dispatch({ type: GET_PRODUCT_LIST, payload: [] })
          dispatch(error_handling_action());
      }).finally(() => dispatch(commonLoading_Action(false)));
};
export const addProduct_action = (value) => dispatch => {
  var apipoint = APIURLS.ADD_PRODUCT_API
  var parameter = {name : value}
  apiPostMethod({ endpoint: apipoint,params:parameter })
      .then((response) => {

          dispatch({ type: GET_PRODUCT_LIST, payload: response?.data })
      })
      .catch((error) => {
          dispatch({ type: GET_PRODUCT_LIST, payload: [] })
          dispatch(error_handling_action());
      })
};

export const createSellInvoice_action = (status=false,params) => dispatch => {
    if(status){
        dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.CREATE_SELL_INVOICE
        apiPostMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};


export const updateSellInvoice_action = (status=false,params,id) => dispatch => {
    if(status){
        dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.UPDATE_SELL_INVOICE+"/"+id
        apiPutMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_SELL_INVOICE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const getallPINoList_Action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GET_ALL_PINO_LIST, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_ALL_PINO
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GET_ALL_PINO_LIST, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GET_ALL_PINO_LIST, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const createPayment_action = (status=false,params) => dispatch => {
    if(status){
        dispatch({ type: CREATE_PAYMENT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.CREATE_PAYMENT
        apiPostMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_PAYMENT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_PAYMENT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const createPurchase_action = (status=false,params) => dispatch => {
    if(status){
        dispatch({ type: CREATE_PURCHASE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.CREATE_PURCHASE
        apiPostMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_PURCHASE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_PURCHASE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};


export const createExpense_action = (status=false,params) => dispatch => {
    if(status){
        dispatch({ type: CREATE_EXPENSE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.CREATE_EXPENSE
        apiPostMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_EXPENSE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_EXPENSE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const createExport_action = (status=false,params) => dispatch => {
    if(status){
        dispatch({ type: CREATE_EXPORT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.CREATE_EXPORT
        apiPostMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_EXPORT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_EXPORT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const getallSellInvoice_action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GATE_SELL_INVOICE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_SELL_INVOICE
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GATE_SELL_INVOICE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GATE_SELL_INVOICE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};
export const deleteSellInvoice_action = (status=false,id) => dispatch => {
    if(status){
        dispatch({ type: DELETE_SELL_INVOICE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.DELETE_SELL_INVOICE+"/"+id
        apiDeleteMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: DELETE_SELL_INVOICE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: DELETE_SELL_INVOICE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const getAllPayment_action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GET_PAYMENT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_PAYMENT
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GET_PAYMENT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GET_PAYMENT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const deletePayment_action = (status=false,id) => dispatch => {
    if(status){
        dispatch({ type: DELETE_PAYMENT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.DELETE_PAYMENT+"/"+id
        apiDeleteMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: DELETE_PAYMENT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: DELETE_PAYMENT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const updatePayment_action = (status=false,params,id) => dispatch => {
    if(status){
        dispatch({ type: CREATE_PAYMENT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.UPDATE_PAYMENT+"/"+id
        apiPutMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_PAYMENT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_PAYMENT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};


export const getAllPurchase_action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GET_PURCHASE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_PURCHASE
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GET_PURCHASE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GET_PURCHASE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const deletePurchase_action = (status=false,id) => dispatch => {
    if(status){
        dispatch({ type: DELETE_PURCHASE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.DELETE_PURCHASE+"/"+id
        apiDeleteMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: DELETE_PURCHASE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: DELETE_PURCHASE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const updatePurchase_action = (status=false,params,id) => dispatch => {
    if(status){
        dispatch({ type: CREATE_PURCHASE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.UPDATE_PURCHASE+"/"+id
        apiPutMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_PURCHASE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_PURCHASE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};



export const getAllExpense_action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GET_EXPENSE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_EXPENSE
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GET_EXPENSE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GET_EXPENSE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const deleteExpense_action = (status=false,id) => dispatch => {
    if(status){
        dispatch({ type: DELETE_EXPENSE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.DELETE_EXPENSE+"/"+id
        apiDeleteMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: DELETE_EXPENSE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: DELETE_EXPENSE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const updateExpense_action = (status=false,params,id) => dispatch => {
    if(status){
        dispatch({ type: CREATE_EXPENSE_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.UPDATE_EXPENSE+"/"+id
        apiPutMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_EXPENSE_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_EXPENSE_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};




export const getAllExport_action = (status=false) => dispatch => {
    if(status){
        dispatch({ type: GET_EXPORT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.GET_EXPORT
        apiGetMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: GET_EXPORT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: GET_EXPORT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const deleteExport_action = (status=false,id) => dispatch => {
    if(status){
        dispatch({ type: DELETE_EXPORT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.DELETE_EXPORT+"/"+id
        apiDeleteMethod({ endpoint: apipoint })
            .then((response) => {
                dispatch({ type: DELETE_EXPORT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: DELETE_EXPORT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};

export const updateExport_action = (status=false,params,id) => dispatch => {
    if(status){
        dispatch({ type: CREATE_EXPORT_DATA, payload: [] })
    }else{
        dispatch(commonLoading_Action(true)) 
        var apipoint = APIURLS.UPDATE_EXPORT+"/"+id
        apiPutMethod({ endpoint: apipoint,params:params })
            .then((response) => {
                dispatch({ type: CREATE_EXPORT_DATA, payload: response })
            })
            .catch((error) => {
                dispatch({ type: CREATE_EXPORT_DATA, payload: [] })
                dispatch(error_handling_action());
            }).finally(() => dispatch(commonLoading_Action(false)));
    }
};