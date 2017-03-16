import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Dim } from '../../utils/config';

const LoginButton = ({ onPress, title, enable = true, customStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ styles.buttonStyle, customStyles ]}
      disabled={!enable}
      >
      <Text style={{
        fontSize: 18*Dim.Factor,
        color: enable ? '#fff' : 'rgba(255,255,255,0.5)'
      }}>
       {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: Dim.Width-44*Dim.Factor,
    height: 44*Dim.Factor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e54748',
    borderRadius: 4*Dim.Factor
  }
};

export { LoginButton };
