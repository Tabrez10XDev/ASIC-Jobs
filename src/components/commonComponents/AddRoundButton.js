import React from 'react';
import { SF,  } from '../../utils';
import { Button } from '.';
import { Style } from '../../styles';

function AddRoundButton({onPress}) {
    return (
      <Button
      onPress={onPress}
      icon={{
        name: 'plus',
        type: 'font-awesome',
        size: SF(15),
        color: 'white',
      }}
      buttonStyle={Style.AddRoundButtonStyle}
      containerStyle={Style.AddRoundButtonView}
      iconContainerStyle={Style.AddRoundIconContainerStyle}
    />
    );
};

export default AddRoundButton;