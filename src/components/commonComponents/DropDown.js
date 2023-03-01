import React, { useMemo } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, SF, SH, SW,Fonts } from '../../utils';
import { DropdownStyle } from '../../styles';
function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    search,
    searchPlaceholder,
    onChange,
    maxHeight,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle,
    renderLeftIcon,
    label,
    textError,
    required=false,
    containerStyle,
    onFocus,
    onBlur,
    renderInputSearch=false,
    onChangeTextSearch,
    textSearch,
    onBlurSearch,
    renderItem
}) {
        const _renderItem = item => {
        return (
            <View style={DropdownStyle.item}>
                <Text style={DropdownStyle.textItem}>{item.label}</Text>
            </View>
        );
    };
    const renderInputSearchView = item => {
        return (
            <TextInput 
            title={'Search'}
            placeholder={'Search'}
            onChangeText={(text) => onChangeTextSearch(text)}
            value={textSearch}
            onBlur={(e) => onBlurSearch(e)}
          />
        );
    };

    var extraProps = {};
  if(renderInputSearch) {
      extraProps['renderInputSearch'] = renderInputSearchView
  }
    return (
        <View style={[DropdownStyle.container,{...containerStyle}]}>
            {label && <Text style={[DropdownStyle.labelStyle,{...labelStyle}]}>{label + (required ? "*" : "")}</Text>}
            <Dropdown
                style={[DropdownStyle.dropdownStyle,{...dropdownStyle}]}
                placeholderStyle={[DropdownStyle.placeholderStyle,{...placeholderStyle}]}
                selectedTextStyle={[DropdownStyle.selectedTextStyle,{...selectedTextStyle}]}
                inputSearchStyle={DropdownStyle.inputSearchStyle}
                iconStyle={DropdownStyle.iconStyle}
                label={label}
                data={data}
                search={search}
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                renderItem={item => renderItem ? renderItem(item) : _renderItem(item)}
                renderLeftIcon={renderLeftIcon}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraProps}
            />
           <Text style={DropdownStyle.errorStyle}>{textError}</Text>

        </View>
    );
};

export default DropdownComponent;