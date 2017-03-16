import React from 'react';
import { connect } from 'dva/mobile';
import { Actions } from 'react-native-router-flux';
import LoginComponent from '../components/Login';

class Login extends React.Component {
  render() {
    const { phone, password, secure, enable, dispatch } = this.props;

    const loginProps = {
      phone,
      password,
      secure,
      enable,
      handlePhone(text) {
        dispatch({
          type: 'Auth/phoneChanged',
          payload: text
        })
      },
      handlePassword(text) {
        dispatch({
          type: 'Auth/passwordChanged',
          payload: text
        })
      },
      onSecure() {
        console.log('onSecure');
        dispatch({
          type: 'Auth/secureChanged',
        })
      },
      onLogin() {
        console.log('onLogin');
        dispatch({
          type: 'Auth/login',
        });
      }
    };
    return (
      <LoginComponent {...loginProps} />
    );
  }
}

const mapStateToProps = ({ Auth }) => {
  const { phone, password, secure, enable, loading } = Auth;
  return { phone, password, secure, enable, loading };
};

export default connect(mapStateToProps)(Login);
