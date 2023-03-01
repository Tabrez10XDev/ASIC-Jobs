import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Style } from '../../../styles';
import { Container, Spacing, SweetAlertModal, Input, DropDown, RadioButton, Button, Loader, DateInput, CountryInput } from '../../../components';
import { RouteName } from '../../../routes';
import { SH, Colors, SF, PIValidator, filterOnlyNumericValue, calculateNumber, Strings } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct_action, createSellInvoice_action, getProduct_action, updateSellInvoice_action } from '../../../redux/action';
import IconEA from 'react-native-vector-icons/Entypo';
import CountryPicker from 'react-native-country-picker-modal'

const PICreationManageScreen = (props) => {
  const { navigation, route } = props;
  const { managetype = "", pidata = null } = route?.params || {};
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [productError, setProductError] = useState("");
  const [message, setMessage] = useState('');
  const { userDetails } = useSelector((state) => state.authReducer);
  const { getProductList, createSellInvoice, commonLoading, getSettingData } = useSelector((state) => state.commonReducer);
  const [saveNext, setSaveNext] = useState(false);

  const [showCountryModal, setShowCountryModal] = useState(false);
  const [countryCode, setCountryCode] = useState('IN');
  const [withFilter, setWithFilter] = useState(true)
  const [withCallingCode, setWithCallingCode] = useState(true)
  const [withFlagButton, setwithFlagButton] = useState(false);
  const [withCallingCodeButton, setwithCallingCodeButton] = useState(true);

  const onSelect = (country) => {
    setState({ ...state, Country: country?.name })
    setCountryCode(country.cca2)
  }

  const lable = getSettingData?.Strings.sellInvoice;
  const arrayData = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' }
  ];

  const stateArray = {
    PINO: "",
    Name: "",
    Country: "India",
    Port: "",
    Soldby: "",
    Broker: "",
    Brokerage: ""
  };
  const stateErrorArray = {
    PINO: "",
    Name: "",
    Country: "",
    Port: "",
    Soldby: "",
    Broker: "",
    Brokerage: ""
  };
  const [state, setState] = useState(stateArray);
  const [stateError, setStateError] = useState(stateErrorArray);

  const [productformInputs, setProductFormInputs] = useState([]);
  const [data, setdata] = useState([]);
  const [productSearch, setProductSearch] = useState(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getProduct_action())
      clearFormData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (createSellInvoice.length != 0) {
      setMessage(createSellInvoice.message)
      setModalVisible(true)
      dispatch(createSellInvoice_action(true));
      if (managetype != "Edit") { clearFormData() }
    }
  }, [createSellInvoice, managetype])

  useEffect(() => {
    if (getProductList.length != 0) {
      setdata(getProductList)
      if (managetype == "Edit") { storeEditData("product") }
    }
  }, [getProductList, managetype])

  useEffect(() => {
    if (data.length != 0) {
      if (productSearch) {
        searchProductData(productSearch.value, productSearch.key)
      } else {

      }
    }
  }, [data])

  //Add more inputs rows
  const storeEditData = (type = "") => {
    if (type == "product") {
      const editArray = {
        PINO: pidata.pi_no.toString(),
        Name: pidata.name,
        Country: pidata.country,
        Port: pidata.port,
        Soldby: pidata.sold_by,
        Broker: pidata.brokerage != "" ? "1" : "2",
        Brokerage: pidata.brokerage
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
    datas.push({ key: "", product_name: '', ProductError: "", quantity: "", QuantityError: "", price: "", PriceError: "", total: "", ProductSearch: "", ProductArrayList: data });
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
      inputValue[key].product_name = text;
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
    var valid = PIValidator({ type: type, "value": text })
    if (type == "PINO") {
      setStateError({ ...stateError, PINO: valid });
    } else if (type == "Name") {
      setStateError({ ...stateError, Name: valid });
    } else if (type == "Country") {
      setStateError({ ...stateError, Country: valid });
    } else if (type == "Port") {
      setStateError({ ...stateError, Port: valid });
    } else {

    }
  }

  const searchProductData = (text, key) => {
    var newData = [];
    if (text != "") {
      var arra = [];
      data.filter(
        function (item) {
          const itemData = item.label.toUpperCase()
          const textData = text.toUpperCase();
          itemData.indexOf(textData) > -1 && arra.push(item)
          return item;
        });
      newData = arra;
    } else {
      newData = data;
    }
    // setProductData(newData);
    const dataArray = [...productformInputs];
    dataArray[key].ProductArrayList = newData;
    setProductFormInputs(dataArray);
    inputHandleProduct(text, key, 'ProductSearch')

  }

  const searchProductDataAdd = (key) => {
    const inputValue = [...productformInputs];
    if (inputValue[key].ProductSearch != "") {
      dispatch(addProduct_action(inputValue[key].ProductSearch));
      setProductSearch({ "key": key, value: inputValue[key].ProductSearch });

    }
  }

  const submitFormData = () => {
    var validCheck = false;

    if (state.Port == "") {
      validCheck = true;
      handleValidation("", "Port");
    }

    if (state.Name == "") {
      validCheck = true;
      handleValidation("", "Name");
    }

    if (state.PINO == "") {
      validCheck = true;
      handleValidation("", "PINO");
    }
    if (productformInputs.length != 0) {
      productformInputs.map((e, key) => {
        if (e.product_name == '' || e.quantity == '' || e.price == '') {
          validCheck = true;
          handleValidProduct(e.product_name, key, 'Product');
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
      "name": state.Name,
      "country": state.Country,
      "port": state.Port,
      "sold_by": state.Soldby,
      "brokerage": state.Brokerage,
      "product": productformInputs
    };

    if (managetype == "Edit") {
      dispatch(updateSellInvoice_action(false, data, pidata.id))
    } else {
      dispatch(createSellInvoice_action(false, data))

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
              value={items.product_name}
              onChange={item => {
                inputHandleProduct(item.id, key, 'Product');
              }}
              textError={items.ProductError}
              containerStyle={Style.ProductAddMoreViewWidth}
              onChangeTextSearch={(text) => searchProductData(text, key)}
              renderInputSearch={true}
              textSearch={items.ProductSearch}
              onBlurSearch={(e) => searchProductDataAdd(key)}
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

  return (
    <Container>
      <Loader loading={commonLoading} />
      <ScrollView>
        <View style={Style.themeMainViewContainer}>
          <Spacing space={SH(30)} />



          <Input
            title={lable.PINO}
            required={true}
            placeholder={lable.PINO}
            errorMessage={stateError.PINO}
            onChangeText={(text) => setState({ ...state, PINO: filterOnlyNumericValue(text) })}
            value={state.PINO}
            inputType="numeric"
            onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'PINO')}
          />
          <Input
            title={lable.Name}
            required={true}
            placeholder={lable.Name}
            errorMessage={stateError.Name}
            onChangeText={(text) => setState({ ...state, Name: text })}
            value={state.Name}
            onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'Name')}
          />
          <CountryInput onPress={() => setShowCountryModal(true)}
            value={state.Country}
            label={lable.Country}
          />
          <Input
            title={lable.Port}
            required={true}
            placeholder={lable.Port}
            errorMessage={stateError.Port}
            onChangeText={(text) => setState({ ...state, Port: text })}
            value={state.Port}
            onEndEditing={(e) => handleValidation(e.nativeEvent.text, 'Port')}
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

          <Spacing space={SH(10)} />
          <Input
            title={lable.Soldby}
            placeholder={lable.Soldby}
            errorMessage={""}
            onChangeText={(text) => setState({ ...state, Soldby: text })}
            value={state.Soldby}
          />
          <Spacing space={SH(10)} />
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
                title={lable.Brokerage}
                placeholder={lable.Brokerage}
                errorMessage={""}
                onChangeText={(text) => setState({ ...state, Brokerage: text })}
                value={state.Brokerage}
                inputType="numeric"
              />
            </>
          }
          <Spacing space={SH(60)} />

        </View>
      </ScrollView>
      <SweetAlertModal modalVisible={modalVisible} onPress={() =>{ setModalVisible(false); saveNext && navigation.navigate(RouteName.PI_CREATION_SCREEN)}} message={message} />
      <View style={Style.bottomButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.PI_CREATION_SCREEN)}>
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
      {showCountryModal &&
        <CountryPicker
          {
          ...{
            countryCode,
            withCallingCodeButton,
            withFlagButton,
            withCallingCode,
            withFilter,
            onSelect
          }}
          modalProps={{
            visible: showCountryModal,
          }}
          onClose={() => setShowCountryModal(false)}
          onOpen={() => setShowCountryModal(true)}
        />
      }
    </Container>
  );
};
export default PICreationManageScreen;
