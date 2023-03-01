import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Style, DropdownStyle } from '../../styles';
import { Container, Spacing, SweetAlertModal, Input, DropDown, RadioButton, Button, Loader, DateInput, DatePicker } from '../../components';
import { RouteName } from '../../routes';
import { SH, Colors, SF, PurchaseValidator, filterOnlyNumericValue, calculateNumber, defaultDateSelectedFormat, setDateFormat, Strings } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct_action, getallPINoList_Action, createPurchase_action, updatePurchase_action } from '../../redux/action';
import IconEA from 'react-native-vector-icons/Entypo';

const PurchaseManageScreen = (props) => {
  const { navigation, route } = props;
  const { managetype = "", pidata = null } = route?.params || {};
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [productError, setProductError] = useState("");
  const [message, setMessage] = useState('');
  const { userDetails } = useSelector((state) => state.authReducer);
  const { getProductList, createPurchase, commonLoading, getPiNoList, getSettingData } = useSelector((state) => state.commonReducer);
  var todayDate = new Date();
  const [saveNext, setSaveNext] = useState(false);

  const lable = getSettingData?.Strings.purchase

  const arrayData = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' }
  ];

  const stateArray = {
    PINO: "",
    Vendor: "",
    Broker: "",
    Brokerage: "",
    BrokerName: "",
    Date: todayDate,
    Loading: "",
    QualityCheckBy: "",
  };
  const stateErrorArray = {
    PINO: "",
    Name: "",
    Vendor: ""
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);
  const [productformInputs, setProductFormInputs] = useState([]);
  const [data, setdata] = useState([]);
  const [showDatepicker, setShowDatepicker] = useState(false);


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearFormData();
      dispatch(getallPINoList_Action())
      dispatch(getProduct_action())
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (createPurchase.length != 0) {
      setMessage(createPurchase.message)
      setModalVisible(true)
      dispatch(createPurchase_action(true));
      if (managetype != "Edit") { clearFormData() }
    }
  }, [createPurchase, managetype])

  useEffect(() => {
    if (getProductList.length != 0) {
      setdata(getProductList)
      if (managetype == "Edit") { storeEditData("product") }
    }
  }, [getProductList, managetype])

  const storeEditData = (type = "") => {
    if (type == "product") {
      const editArray = {
        PINO: pidata.pi_no.toString(),
        Vendor: pidata.vendor,
        Broker: (pidata.brokerage != "" && pidata.brokerage != "0.00") || pidata.broker_name != "" ? '1' : '2',
        Brokerage: pidata.brokerage,
        BrokerName: pidata.broker_name,
        Date: defaultDateSelectedFormat(pidata.purchase_date),
        Loading: pidata.loading_status.toString(),
        QualityCheckBy: pidata.quality_checkby,
      };
      setState(editArray)
      var proData = [];
      if (pidata.product && pidata?.product.length != 0) {
        proData = pidata?.product.map((item, key) => {
          item['key'] = key;
          item['product_name'] = item.product_id;
          item['ProductError'] = '';
          item['QuantityError'] = '';
          item['PriceError'] = '';
          item['ProductArrayList'] = data;
          return item;
        });
      }
      setProductFormInputs(proData)


    }

  }

  //Add more inputs rows
  const handleAddMoreLine = () => {
    setProductError("")
    const datas = [...productformInputs];
    datas.push({ key: "", product_id: '', ProductError: "", quantity: "", QuantityError: "", price: "", PriceError: "", total: "", ProductSearch: "", ProductArrayList: data });
    setProductFormInputs(datas);
  }

  const removeFields = (index) => {
    let data = [...productformInputs];
    data.splice(index, 1)
    setProductFormInputs(data)
  }
  //Validation userId Input Values
  const handleValidProduct = (text, key, type) => {
    const dataValid = [...productformInputs];
    dataValid[key].key = key;
    if ((text == null || text == "")) {
      if (type == "Product") {
        dataValid[key].ProductError = 'Required!';
      } else if (type == "Quantity") {
        dataValid[key].QuantityError = 'Required!';
      } else if (type == "Price") {
        dataValid[key].PriceError = 'Required!';
      }
    } else {
      if (type == "Product") {
        dataValid[key].ProductError = "";
      } else if (type == "Quantity") {
        dataValid[key].QuantityError = "";
      } else if (type == "Price") {
        dataValid[key].PriceError = "";
      }
    }
    setProductFormInputs(dataValid);
  }
  //Set userId Input Values
  const inputHandleProduct = (text, key, type) => {

    const inputValue = [...productformInputs];
    inputValue[key].key = key;
    if (type == "Product") {
      inputValue[key].product_id = text;
      handleValidProduct(text, key, 'Product');
    } else if (type == "Quantity") {
      inputValue[key].quantity = text;
      inputValue[key].total = calculateNumber(text, inputValue[key].price).toString();

    } else if (type == "Price") {
      inputValue[key].price = text;
      inputValue[key].total = calculateNumber(text, inputValue[key].quantity).toString();
    }
    else if (type == "ProductSearch") {
      inputValue[key].ProductSearch = text;
    }
    setProductFormInputs(inputValue);
  }

  const handleValidation = (text, type) => {
    var valid = PurchaseValidator({ type: type, "value": text })
    if (type == "PINO") {
      setStateError({ ...stateError, PINO: valid });
    } else if (type == "Vendor") {
      setStateError({ ...stateError, Vendor: valid });
    } else {

    }
  }

  const submitFormData = () => {
    var validCheck = false;

    if (state.Vendor == "") {
      validCheck = true;
      handleValidation("", "Vendor");
    }
    if (state.PINO == "") {
      validCheck = true;
      handleValidation("", "PINO");
    }

    if (productformInputs.length != 0) {
      productformInputs.map((e, key) => {
        if (e.product_id == '' || e.quantity == '' || e.price == '') {
          validCheck = true;
          handleValidProduct(e.product_id, key, 'Product');
          handleValidProduct(e.quantity, key, 'Quantity');
          handleValidProduct(e.price, key, 'Price')
        }
      });
    } else {
      validCheck = true;
      setProductError("Product is required")
    }
    if (validCheck) {
      return;
    }
    var data = {
      "user_id": userDetails.id,
      "pi_no": state.PINO,
      "vendor": state.Vendor,
      "product": productformInputs,
      "purchase_date": state.Date,
      "broker_name": state.BrokerName,
      "brokerage": state.Brokerage,
      "loading_status": state.Loading,
      "quality_checkby": state.QualityCheckBy,
    };


    if (managetype == "Edit") {
      dispatch(updatePurchase_action(false, data, pidata.id))
    } else {
      dispatch(createPurchase_action(false, data))
    }
  }

  const clearFormData = () => {
    setState(stateArray)
    setStateError(stateErrorArray)
    setProductFormInputs([])
    setProductError('')
  }

  const AddMoreProductView = (items, key) => {
    return (
      <View style={Style.ProductAddMoreViewOuter} key={key}>
        <View style={Style.ProductAddMoreViewInner}>
          <TouchableOpacity style={Style.removeBox} onPress={() => removeFields(key)}>
            <IconEA
              color={Colors.theme_backgound_second} size={SF(30)}
              name="circle-with-cross"
            />
          </TouchableOpacity>
          <Spacing space={SH(20)} />
          <View style={Style.ProductAddMoreView}>
            <DropDown
              data={items.ProductArrayList}
              required={true}
              search
              searchPlaceholder="Search Product"
              label={lable.Product}
              placeholder="Select item"
              labelField="label"
              valueField="id"
              value={items.product_id}
              onChange={item => {
                inputHandleProduct(item.id, key, 'Product');
              }}
              textError={items.ProductError}
              containerStyle={Style.ProductAddMoreViewWidth}
            />

            <Input
              title={lable.Quantity}
              required={true}
              placeholder={lable.Quantity}
              errorMessage={items.QuantityError}
              onChangeText={(text) => inputHandleProduct(text, key, 'Quantity')}
              value={items.quantity}
              inputType="numeric"
              containerStyle={Style.ProductAddMoreViewWidth}
              onEndEditing={(e) => handleValidProduct(e.nativeEvent.text, key, 'Quantity')}
            />
          </View>

          <View style={Style.ProductAddMoreView}>
            <Input
              title={lable.Price}
              required={true}
              placeholder={lable.Price}
              errorMessage={items.PriceError}
              onChangeText={(text) => inputHandleProduct(text, key, 'Price')}
              value={items.price}
              inputType="numeric"
              containerStyle={Style.ProductAddMoreViewWidth}
              onEndEditing={(e) => handleValidProduct(e.nativeEvent.text, key, 'Price')}
            />
            <Input
              title={lable.Total}
              required={true}
              placeholder={lable.Total}
              value={items.total}
              disabled={true}
              containerStyle={Style.ProductAddMoreViewWidth}
            />
          </View>
        </View>
        <Spacing space={SH(20)} />
      </View>
    )
  }
  const dropDownOnchnage = (text, type) => {
    handleValidation(text, type)
    if (type == 'PINO') {
      setState({ ...state, PINO: filterOnlyNumericValue(text) })
    }
  }
  const DateChange = (event, selectedDate) => {
    const currentDate = selectedDate || state.Date;
    setShowDatepicker(false);

    setState({ ...state, Date: currentDate })
  };
  const _renderItem = item => {
    return (
      <View style={DropdownStyle.item}>
        <Text style={DropdownStyle.textItem}>{item.pi_no}</Text>
      </View>
    );
  };
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

          <Input
            title={lable.Vendor}
            required={true}
            placeholder={lable.Vendor}
            errorMessage={stateError.Vendor}
            onChangeText={(text) => setState({ ...state, Vendor: text })}
            value={state.Vendor}
            onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'Vendor')}
          />



          <TouchableOpacity style={Style.addMoreIconTitleView} onPress={() => handleAddMoreLine()}>
            <IconEA
              color={Colors.blue} size={SF(25)}
              name="circle-with-plus"
            />
            <Text style={Style.addMoreIconTitleText}>Product</Text>
          </TouchableOpacity>
          <Spacing space={SH(5)} />
          <Text style={Style.addMoreIconTitleView} >{productError}</Text>
          <Spacing space={SH(10)} />

          {
            productformInputs.map((items, key) => {
              return (
                AddMoreProductView(items, key)
              )
            })
          }



          <RadioButton
            arrayData={arrayData}
            title={lable.Broker}
            errorMessage={""}
            onChangeText={(text) => setState({ ...state, Broker: text })}
            value={state.Broker}
          />
          {state.Broker == "1" &&
            <>
              <Input
                title={lable.BrokerName}
                placeholder={lable.BrokerName}
                errorMessage={""}
                onChangeText={(text) => setState({ ...state, BrokerName: text })}
                value={state.BrokerName}
              />
              <Input
                title={lable.Brokerage}
                placeholder={lable.Brokerage}
                errorMessage={""}
                onChangeText={(text) => setState({ ...state, Brokerage: text })}
                value={state.Brokerage}
                inputType="numeric"
              />
            </>
          }
          <DateInput
            label={lable.Date}
            value={setDateFormat(state.Date)}
            onPress={() => setShowDatepicker(true)}
            textError={''}
          />
          <RadioButton
            arrayData={arrayData}
            title={lable.Loading}
            errorMessage={""}
            onChangeText={(text) => setState({ ...state, Loading: text })}
            value={state.Loading}
          />

          <Input
            title={lable.QualityCheckBy}
            placeholder={lable.QualityCheckBy}
            errorMessage={""}
            onChangeText={(text) => setState({ ...state, QualityCheckBy: text })}
            value={state.QualityCheckBy}
          />

          <Spacing space={SH(60)} />
        </View>
      </ScrollView>
      <DatePicker show={showDatepicker} value={state.Date} mode="date" dateOnChange={DateChange} />
      <SweetAlertModal modalVisible={modalVisible} onPress={() => { setModalVisible(false); saveNext && navigation.navigate(RouteName.PURCHASE_SCREEN) }} message={message} />
      <View style={Style.bottomButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.PURCHASE_SCREEN)}>
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
    </Container>
  );
};
export default PurchaseManageScreen;
