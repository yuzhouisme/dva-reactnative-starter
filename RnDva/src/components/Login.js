import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dim } from '../utils/config';
import { LoginButton, CustomNavigationBar } from './common';
import { lineIcoStyle, lineDividerStyle, inputStyle } from '../utils/defaults';

const LoginComponent = ({ phone, password, secure, enable, handlePhone, handlePassword, onSecure, onLogin }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <CustomNavigationBar navigationBarColor='transparent' backImageUri='close_lightgray' />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={{
            width: 98*Dim.Factor,
            height: 98*Dim.Factor
          }} source={{ uri: 'logo_ico' }} />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={inputStyle}
              clearButtonMode='while-editing'
              placeholder="手机号"
              placeholderTextColor='#432f2f'
              keyboardType='number-pad'
              maxLength={11}
              value={phone}
              onChangeText={(text) => handlePhone(text)} />
            <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
          </View>

          <View style={[ styles.inputContainer, { marginTop: 10 } ]}>
            <View style={styles.inputRowContainer}>
              <TextInput
                style={inputStyle}
                clearButtonMode='while-editing'
                placeholder="登录密码"
                placeholderTextColor='#432f2f'
                secureTextEntry={secure}
                maxLength={16}
                value={password}
                onChangeText={(text) => handlePassword(text)} />
              <TouchableOpacity onPress={onSecure}>
                <Image style={lineIcoStyle} source={ secure ? { uri: 'eye_close_lightgray' } : { uri: 'eye_open_red' }} />
              </TouchableOpacity>
            </View>
            <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
          </View>
        </View>

        <View style={styles.additionalContainer}>
          <TouchableOpacity onPress={Actions.forgot}>
            <Text style={{
              fontSize: 14*Dim.Factor,
              color: '#968d8d'
            }}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.register}>
            <Text style={{
              fontSize: 14*Dim.Factor,
              color: '#e54748'
            }}>注册账户</Text>
          </TouchableOpacity>
        </View>

        <LoginButton onPress={onLogin} title='登录' enable={enable} customStyles={{ marginTop: 65*Dim.Factor }} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: 35*Dim.Factor,
    marginBottom: 55*Dim.Factor,
  },
  inputContainer: {
    height: 47*Dim.Factor
  },
  inputRowContainer: {
    flexDirection: 'row',
    height: 46*Dim.Factor,
    alignItems: 'center'
  },
  additionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dim.Width-44*Dim.Factor,
    marginTop: 20*Dim.Factor
  }
};

export default LoginComponent;
