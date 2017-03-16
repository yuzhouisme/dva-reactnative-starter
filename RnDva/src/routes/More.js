import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'dva/mobile';

class MoreComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is more.</Text>
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

export default MoreComponent;
