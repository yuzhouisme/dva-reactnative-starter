import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'dva/mobile';
import { Actions } from 'react-native-router-flux';
import { Motion, spring } from 'react-motion';
import { Dim } from '../utils/config';

class HomepageComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: '',
    };
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is homepage.</Text>
        <Button title="login" onPress={Actions.auth} />
        <Button title="register" onPress={Actions.register} />

        <Button title="react-motion in rn, pls click it"
            onPress={() => this.handleClick()} />
        <Motion style={{
            x: spring(this.state.open ? Dim.Width-50 : 0),
            a: spring(this.state.open ? 1 : 0.2)
          }}>
          {({x, a}) =>
            <View style={{ width: Dim.Width, height: 50, backgroundColor: '#f9f9f9' }}>
              <View style={{
                  width: 50,
                  height: 50,
                  position: 'absolute',
                  left: x,
                  opacity: a,
                  backgroundColor: '#ffc2da' }}>
              </View>
            </View>
          }
        </Motion>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const mapStateToProps = ({ Homepage }) => {
  return {};
};

export default connect(mapStateToProps)(HomepageComponent);
