import React from 'react';
import { connect } from 'dva/mobile';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet, Text, Image, View } from 'react-native';

import Splash from './components/Splash';

import Homepage from './routes/Homepage';
import Find from './routes/Find';
import More from './routes/More';

import Login from './routes/Login';
import Register from './routes/Register';
import Register2 from './routes/Register2';

class TabIcon extends React.PureComponent {
  render() {
    const { selected, title } = this.props;

    var title_zh, ico, ico_selected = undefined;
    switch (title) {
      case '首页':
        ico = require('../assets/homepage.png');
        ico_selected = require('../assets/homepage_icon.png');
        break;
      case '发现':
        ico = require('../assets/find.png');
        ico_selected = require('../assets/find_icon.png');
        break;
      case '更多':
        ico = require('../assets/more.png');
        ico_selected = require('../assets/more_icon.png');
        break;
      default:
    }

    return (
      <View style={styles.tabIcon}>
        <Image style={styles.tabIconIco} source={ selected ? ico : ico_selected } />
        <Text style={[ styles.tabIconTitle, { color: selected ? '#e54748' : '#766a6a' } ]}
          >
          {title}
        </Text>
      </View>

        );
    }
}

const RouterComponent = ({ dispatch }) => {

  function onLogout() {
    dispatch({ type: 'Auth/logout' });
  }

  return (
    <Router>

      <Scene
        key="splash"
        hideNavBar
        passProps
        splashText="Hello RnDva"
        component={Splash}
      />

      <Scene key="auth">
        <Scene key="login" component={Login} hideNavBar />
      </Scene>

      <Scene key="tabbar" tabs={true} hideNavBar tabBarStyle={styles.tabBar}>

        <Scene
          key="homepage"
          title="首页"
          icon={TabIcon}
          initial
         >
            <Scene key="public" component={Homepage} hideNavBar />
            <Scene key="authorized" component={Homepage} hideNavBar />
        </Scene>

        <Scene key="find" title="发现" component={Find} icon={TabIcon} />
        <Scene key="more" title="更多" component={More} icon={TabIcon} />
      </Scene>

      <Scene key="register" component={Register} hideNavBar />
      <Scene key="register2" component={Register2} hideNavBar />

    </Router>
  );
};

let styles = StyleSheet.create({
  tabBar: {
      borderTopWidth : 1,
      borderColor : '#ccc'
  },
  tabIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIconIco: {
    width: 22,
    height: 22
  },
  tabIconTitle: {
    marginTop: 5,
    fontSize: 10
  },
  redNav: {
    backgroundColor: '#E44747'
  },
  redNavTitle: {
    color: '#fff'
  },
  redNavRightButtonText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 3
  },
  whiteNav: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
  },
  whiteNavTitle: {
    color: '#090404'
  },
});

export default connect()(RouterComponent);
