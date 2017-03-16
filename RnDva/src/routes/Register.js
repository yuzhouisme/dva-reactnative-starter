import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { connect } from 'dva/mobile';
import { Actions } from 'react-native-router-flux';
import { Dim } from '../utils/config';
import { LoginButton, CustomNavigationBar } from '../components/common';
import { lineIcoStyle, lineDividerStyle, inputStyle, inputTitleStyle } from '../utils/defaults';

class Register extends React.Component {

  handlePhone(text) {
    this.props.dispatch({
      type: 'Newbie/phoneChanged',
      payload: text
    })
  }

  handlePassword(text) {
    this.props.dispatch({
      type: 'Newbie/passwordChanged',
      payload: text
    })
  }

  onChecked() {
    this.props.dispatch({
      type: 'Newbie/checkedChanged',
    })
  }

  onSecure() {
    this.props.dispatch({
      type: 'Newbie/secureChanged',
    })
  }

  render() {
    const { phone, password, secure, enable, checked } = this.props;

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
              <View style={styles.inputRowContainer}>
                <Text style={inputTitleStyle}>
                  { "手机号    " }
                </Text>
                <TextInput
                  clearButtonMode='while-editing'
                  style={[ inputStyle, { fontSize: 14*Dim.Factor, marginLeft: 20*Dim.Factor } ]}
                  value={phone}
                  keyboardType='number-pad'
                  maxLength={11}
                  placeholder="中国大陆11手机号码"
                  placeholderTextColor='#b3a4a4'
                  onChangeText={(text) => this.handlePhone(text)}
                  />
              </View>
              <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputRowContainer}>
                <Text style={inputTitleStyle}>登录密码</Text>
                <TextInput
                  clearButtonMode='while-editing'
                  style={[ inputStyle, { fontSize: 14*Dim.Factor, marginLeft: 20*Dim.Factor } ]}
                  value={password}
                  secureTextEntry={secure}
                  maxLength={16}
                  placeholder="6～16位数字、字母或符号组合"
                  placeholderTextColor='#b3a4a4'
                  returnKeyType='done'
                  onChangeText={(text) => this.handlePassword(text)}
                />
                <TouchableOpacity onPress={() => this.onSecure()}>
                  <Image style={lineIcoStyle} source={ secure ? { uri: 'eye_close_lightgray' } : { uri: 'eye_open_red' }} />
                </TouchableOpacity>
              </View>
              <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
            </View>
          </View>

          <LoginButton onPress={Actions.register2} title='下一步' enable={enable} customStyles={{ marginTop: 65*Dim.Factor }} />

          <View style={styles.tipsContainer}>
            <TouchableOpacity onPress={() => this.onChecked()}>
              <Image style={styles.checkImage} source={ checked ? { uri: 'check_colorful_round' } : { uri: 'uncheck_lightgray_round' }} />
            </TouchableOpacity>
            <Text style={styles.tips}>我已阅读并同意</Text>
            <TouchableOpacity>
              <Text style={styles.agreement}>《用户服务协议》</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  tips: {
    fontSize: 14*Dim.Factor,
    color: '#968d8d'
  },
  agreement: {
    fontSize: 14*Dim.Factor,
    color: '#e54748'
  },
  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15*Dim.Factor,
  },
  checkImage: {
    width: 20*Dim.Factor,
    height: 20*Dim.Factor,
    marginLeft: 4*Dim.Factor,
    marginRight: 2*Dim.Factor
  }
});


const mapStateToProps = ({ Newbie }) => {
  const { phone, password, secure, enable, checked, loading } = Newbie;

  return { phone, password, secure, enable, checked, loading };
};

export default connect(mapStateToProps)(Register);
