import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DropdownStyle, Style } from '../../styles';
import { Container, Spacing, SweetAlertModal, Input, DropDown, Button, Loader } from '../../components';
import { RouteName } from '../../routes';
import { SH, Colors, SF, PaymentValidator, Strings } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import IconEA from 'react-native-vector-icons/Entypo';
import { createExpense_action, getallPINoList_Action, updateExpense_action } from '../../redux/action';

const ExpenseManageScreen = (props) => {
  const { navigation, route } = props;
  const { managetype = "", pidata = null } = route?.params || {};
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [saveNext, setSaveNext] = useState(false);
  const [message, setMessage] = useState('');
  const { userDetails } = useSelector((state) => state.authReducer);
  const { commonLoading, getPiNoList, createExpense, getSettingData } = useSelector((state) => state.commonReducer);
  const [productError, setProductError] = useState("");
  const lable = getSettingData?.Strings.expense;

  const [expenseformInputs, setExpenseFormInputs] = useState([]);

  const stateArray = {
    PINO: "",
    Amount: "",
    ExpenseType: "",
    Total: ""

  };
  const stateErrorArray = {
    PINO: "",
    Amount: "",
    ExpenseType: ""
  };
  var totals = 0;
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getallPINoList_Action())
      if (managetype == "Edit") {
        storeEditData()
      } else {
        clearFormData();
      }
    });
    return unsubscribe;
  }, [navigation, managetype, pidata]);


  const storeEditData = () => {
    const editArray = {
      PINO: pidata.pi_no.toString(),
      Amount: "",
      ExpenseType: "",
      Total: pidata.total_amount.toString()
    };

    setState(editArray)
    setExpenseFormInputs(pidata.expense)
    setStateError(stateErrorArray)
    setProductError('')
  }


  useEffect(() => {
    if (createExpense.length != 0) {
      setMessage(createExpense.message)
      setModalVisible(true)
      dispatch(createExpense_action(true));
      if (managetype != "Edit") { clearFormData() }

    }
  }, [createExpense, managetype])

  const handleValidation = (text, type) => {
    var valid = PaymentValidator({ type: type, "value": text })
    if (type == "Amount") {
      setStateError({ ...stateError, Amount: valid });
    } else if (type == "PINO") {
      setStateError({ ...stateError, PINO: valid });
    } else if (type == "ExpenseType") {
      setStateError({ ...stateError, ExpenseType: valid });
    } else {

    }
  }

  const submitFormData = () => {
    var validCheck = false;

    if (state.PINO == "") {
      validCheck = true;
      handleValidation("", "PINO");
    }
    if (validCheck) {
      return;
    }

    var data = {
      "user_id": userDetails.id,
      "pi_no": state.PINO,
      "expense": expenseformInputs,
      // "total": totals
    };
    if (managetype == "Edit") {
      dispatch(updateExpense_action(false, data, pidata.id))
    } else {
      dispatch(createExpense_action(false, data))
    }
  }

  const clearFormData = () => {
    setState(stateArray)
    setStateError(stateErrorArray)
    setExpenseFormInputs(getSettingData?.expense_type)
    setProductError('')
  }

  const _renderItem = item => {
    return (
      <View style={DropdownStyle.item}>
        <Text style={DropdownStyle.textItem}>{item.pi_no}</Text>
      </View>
    );
  };

  const dropDownOnchnage = (text, type) => {
    handleValidation(text, type)
    if (type == 'PINO') {
      setState({ ...state, PINO: text })
    } else if (type == 'ExpenseType') {
      setState({ ...state, ExpenseType: text })
    }
  }
  //Set userId Input Values
  const inputHandleProduct = (text, key, type) => {
    var inputValue = [...expenseformInputs];
    var newdata = inputValue.map((curr, index) => {
      if (index == key) {
        var newValue = "";
        if (type == "expense_name") {
          newValue = { expense_name: text }
        } else if (type == "amount") {
          newValue = { amount: text }
        } else if (type == "note") {
          newValue = { note: text }
        } else if (type == "expense_name_blur") {
          newValue = { editable: false }
        } else if (type == "expense_name_edit") {
          newValue = { editable: true }
        }
        return { ...curr, ...newValue }
      } else {
        return curr
      }
    })
    setExpenseFormInputs(newdata);

  }

  //Add more inputs rows
  const handleAddMoreLine = () => {
    setProductError("")
    var newArray = { expense_name: "", amount: '', note: "", editable: true }
    setExpenseFormInputs(prev => [newArray, ...prev]);
  }
  const removeFields = (index) => {
    let data = [...expenseformInputs];
    data.splice(index, 1)
    setExpenseFormInputs(data)
  }

  const AddMoreProductView = (items, key) => {
    if (items.amount != "") totals += parseInt(items.amount);
    return (
      <View key={key}>
        {(items.editable == false || items.editable == true) &&
          <TouchableOpacity style={Style.editIconTitleViewTopSet} onPress={() => removeFields(key)}>
            <IconEA
              color={Colors.theme_backgound_second} size={SF(20)}
              name="circle-with-cross"
            />
          </TouchableOpacity>
        }
        {items.editable ?
          <>
            <Input
              placeholder={lable.ExpenseType}
              errorMessage={""}
              onChangeText={(text) => inputHandleProduct(text, key, 'expense_name')}
              value={items.expense_name}
              inputStyle={Style.expense_lable_input_style}
              onBlur={() => inputHandleProduct(items.expense_name, key, 'expense_name_blur')}
            />
          </>
          :
          <View style={Style.ExpenseAddMoreViewOuter}>
            <Text style={Style.ProductAddMoreViewLableText}>{items.expense_name} : </Text>
            {items.editable == false &&
              <>
                <TouchableOpacity style={Style.editIconTitleView} onPress={() => inputHandleProduct(items.expense_name, key, 'expense_name_edit')}>
                  <IconEA
                    color={Colors.blue} size={SF(20)}
                    name="edit"
                  />
                </TouchableOpacity>
              </>
            }
          </View>
        }

        <View>
          <View style={Style.ProductAddMoreView}>
            <Input
              placeholder={lable.Amount}
              errorMessage={""}
              onChangeText={(text) => inputHandleProduct(text, key, 'amount')}
              value={items.amount}
              inputType="numeric"
              containerStyle={Style.ProductAddMoreViewWidth}
            />
            <Input
              placeholder={lable.Note}
              errorMessage={""}
              onChangeText={(text) => inputHandleProduct(text, key, 'note')}
              value={items.note}
              containerStyle={Style.ProductAddMoreViewWidth}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <Container>
      <Loader loading={commonLoading} />

      <ScrollView>
        <View style={Style.themeMainViewContainer}>
          <Spacing space={SH(30)} />
          <DropDown
            required={true}
            data={getPiNoList}
            search
            searchPlaceholder="Search"
            label={lable.PINO}
            placeholder="Select item"
            labelField="pi_no"
            valueField="id"
            value={state.PINO}
            onChange={item => {
              dropDownOnchnage(item.id, 'PINO')

            }}
            textError={stateError.PINO}
            renderItem={item => _renderItem(item)}
          />
          <TouchableOpacity style={Style.addMoreIconTitleView} onPress={() => handleAddMoreLine()}>
            <IconEA
              color={Colors.blue} size={SF(25)}
              name="circle-with-plus"
            />
            <Text style={Style.addMoreIconTitleText}>{lable.ExpenseType}</Text>
          </TouchableOpacity>
          <Spacing space={SH(5)} />
          <Text style={Style.addMoreIconTitleView} >{productError}</Text>
          <Spacing space={SH(5)} />

          {
            expenseformInputs.map((items, key) => {
              return (
                AddMoreProductView(items, key)
              )
            })
          }
          <Spacing space={SH(10)} />

          <Input
            title={lable.Total}
            required={true}
            placeholder={lable.Total}
            value={totals.toString()}
            disabled={true}
          />
          <Spacing space={SH(50)} />
        </View>


      </ScrollView>
      <View style={Style.bottomButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.EXPENSE_SCREEN)}>
          <IconEA
            color={Colors.theme_backgound_second} size={SF(40)}
            name="arrow-with-circle-left"
          />
        </TouchableOpacity>
        <Button
          title={managetype == "Edit" ? "Save & Next" : "Clear"}
          onPress={() => { if (managetype == "Edit") { submitFormData(); setSaveNext(true) } else { clearFormData() } }}
          containerStyle={Style.PrButtonStyle}
        />
        <Button
          title={managetype == "Edit" ? "Save" : "Submit"}
          onPress={() => { submitFormData(); setSaveNext(false) }}
          containerStyle={Style.PrButtonStyle}
        />
      </View>
      <SweetAlertModal modalVisible={modalVisible} onPress={() => { setModalVisible(false); saveNext && navigation.navigate(RouteName.EXPENSE_SCREEN) }} message={message} />

    </Container>
  );
};
export default ExpenseManageScreen;
