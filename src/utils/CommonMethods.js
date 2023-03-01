import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";

export const Validator = state => {
  if (state.type == "email") {
    if (state.value == "") {
      return "Email is required";
    } else if (!ValidateEmail(state.value)) {
      return "Please enter valid email.";
    } else {
      return "";
    }
  } else if (state.type == "password") {
    if (state.value == "") {
      return "Password is required";
    } else {
      return "";
    }
  }
};

export const PIValidator = state => {
  var returns = "";
  if (state.type == "PINO" && state.value == "") {
    returns = "PINO is required";
  } else if (state.type == "Name" && state.value == "") {
    returns = "Name is required";
  } else if (state.type == "Country" && state.value == "") {
    returns = "Country is required";
  } else if (state.type == "Port" && state.value == "") {
    returns = "Port is required";
  }
  return returns;
};

export const PaymentValidator = state => {
  var returns = "";
  if (state.type == "PINO" && state.value == "") {
    returns = "PINO is required";
  } else if (state.type == "Amount" && state.value == "") {
    returns = "Amount is required";
  } else if (state.type == "Date" && state.value == "") {
    returns = "Date is required";
  } else if (state.type == "PaymentThrough" && state.value == "") {
    returns = "Payment type is required";
  }
  return returns;
};

export const PurchaseValidator = state => {
  var returns = "";
  if (state.type == "PINO" && state.value == "") {
    returns = "PINO is required";
  } else if (state.type == "Vendor" && state.value == "") {
    returns = "Vendor is required";
  }
  return returns;
};

export const ExportValidator = state => {
  var returns = "";
  if (state.type == "PINO" && state.value == "") {
    returns = "PINO is required";
  } else if (state.type == "InvoiceNo" && state.value == "") {
    returns = "Invoice No. is required";
  }
  return returns;
};
export const ValidateEmail = param => {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const paramTrim = param?.trim();
  if (paramTrim) {
    if (emailRegex.test(paramTrim)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
export const filterOnlyNumericValue = value => {
  return value.replace(/[^0-9]/g, '');
}
export const calculateNumber = (numberOne = 1, numberTwo = 1) => {
  numberOne = numberOne == "" ? 1 : numberOne;
  numberTwo = numberTwo == "" ? 0 : numberTwo;
  return (numberOne * numberTwo)
};

export const setDateFormat = (currentDate) => {
  return moment(currentDate, 'YYYY-MM-DDTHH:mm:ss Z').format('DD-MM-YYYY')
}

export const formDisplayDateFormat = (currentDate) => {
  return moment(currentDate, 'DD MMM YYYY').format('YYYY-MM-DD')
}

export const defaultDateSelectedFormat = (currentDate) => {
  var dates = moment(currentDate, 'DD MMM YYYY').format('YYYY-MM-DDTHH:mm:ss');
  return new Date(dates)
}

export const permissionCheck = (array, id) => {
  if (array.includes(id)) {
    return true;
  } else {
    return false;
  }
};