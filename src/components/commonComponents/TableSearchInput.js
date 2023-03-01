import React from 'react';
import { Colors, SF,  } from '../../utils';
import { Input } from '.';
import { Style } from '../../styles';

function TableSearchInput(props) {
  const {onChangeText,value,onBlur} = props;
    return (
      <Input 
           leftIcon={{ type: 'font-awesome', name: 'search', color:Colors.gray }}
           inputContainerStyle={Style.inputContainerStyleSearch}
           inputStyle={Style.inputStyleSearch}
           onChangeText={onChangeText}
           value={value}
           placeholder="Search..."
           onBlur={onBlur}
          />
    );
};

export default TableSearchInput;