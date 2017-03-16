import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { connect } from 'dva/mobile';
import { Actions } from 'react-native-router-flux';
import { Dim } from '../utils/config';
import { LoginButton, CustomNavigationBar } from '../components/common';
import { lineIcoStyle, lineDividerStyle, inputStyle, inputTitleStyle } from '../utils/defaults';

class Register2 extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      captcha: '',
      referrer: '',
      enable: false
    };
  }

  handleCaptcha(text) {
    this.setState({
      captcha: text,
      enable: text.length > 0 ? true : false
    })
  }

  handleReferrer(text) {
    this.setState({
      referrer: text,
    })
  }

  getCaptcha() {
    this.props.dispatch({
      type: 'Newbie/getCaptcha'
    })
  }

  onRegister() {
    const { captcha, referrer } = this.state;
    this.props.dispatch({
      type: 'Newbie/onRegister',
      payload: {
        captcha: captcha,
        referrer: referrer
      }
    });
  }

  render() {
    const { phone, running, countdown } = this.props;
    const { captcha, referrer, enable } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <CustomNavigationBar navigationBarColor='#f9f9f9' backImageUri='back_lightgray' title='输入验证码' titleColor='#090904'  />

        <View style={styles.container}>
          <View>
            <View style={{ marginTop: 40*Dim.Factor, width: Dim.Width-44*Dim.Factor }}>
              <Text style={{ fontSize: 16*Dim.Factor, color: '#432f2f' }}>已发送验证码至</Text>
            </View>
            <View style={styles.phoneContainer}>
              <Text style={{ fontSize: 26*Dim.Factor, color: '#090404' }}>{phone}</Text>
            </View>
          </View>
          <View>
            <View style={[ styles.inputContainer, { marginTop: 93*Dim.Factor } ]}>
              <View style={styles.inputRowContainer}>
                <Text style={inputTitleStyle}>验证码</Text>
                <TextInput
                  clearButtonMode='while-editing'
                  style={[ inputStyle, { marginLeft: 20*Dim.Factor } ]}
                  value={captcha}
                  placeholder="6位数字"
                  placeholderTextColor='#b3a4a4'
                  maxLength={6}
                  keyboardType='number-pad'
                  onChangeText={(text) => this.handleCaptcha(text)} />

                <View style={styles.splitLine} />

                <TouchableOpacity
                  onPress={() => this.getCaptcha()}
                  disabled={running}>
                  <Text style={{ fontSize: 14*Dim.Factor, color: running ? '#766a6a' : '#e54748'}}>
                    { running ? `${countdown} 后重新获取` : '点击重新获取' }
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
            </View>

            <View style={[ styles.inputContainer, { marginTop: 10*Dim.Factor } ]}>
              <View style={styles.inputRowContainer}>
                <Text style={inputTitleStyle}>推荐人</Text>
                <TextInput
                  clearButtonMode='while-editing'
                  style={[ inputStyle, { marginLeft: 20*Dim.Factor } ]}
                  value={referrer}
                  placeholder="选填"
                  placeholderTextColor='#b3a4a4'
                  keyboardType='number-pad'
                  onChangeText={(text) => this.handleReferrer(text)} />
              </View>
              <View style={[ lineDividerStyle, { backgroundColor: '#ccc', width: Dim.Width-44*Dim.Factor } ]} />
            </View>
          </View>

          <LoginButton onPress={() => this.onRegister()} title='完成' enable={enable} customStyles={{ marginTop: 65*Dim.Factor }} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    height: 47*Dim.Factor
  },
  inputRowContainer: {
    flexDirection: 'row',
    height: 46*Dim.Factor,
    alignItems: 'center'
  },
  phoneContainer: {
    marginTop: 20*Dim.Factor,
    alignItems: 'center'
  },
  splitLine: {
    width: 1,
    height: 20*Dim.Factor,
    marginRight: 10*Dim.Factor,
    backgroundColor: '#ccc'
  }
});


const mapStateToProps = ({ Newbie }) => {
  const { phone, running, countdown } = Newbie;
  return { phone, running, countdown };
};

export default connect(mapStateToProps)(Register2);
