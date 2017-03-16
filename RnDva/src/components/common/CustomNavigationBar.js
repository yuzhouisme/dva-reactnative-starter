import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Dim } from '../../utils/config';
import { Actions } from 'react-native-router-flux';

const CustomNavigationBar = ({ navigationBarColor, backImageUri, title, titleColor = '#fff', onRightPress, rightImageUri, rightText }) => {
  return (
    <View>
      <View style={[ styles.statusBarStyle, { backgroundColor: navigationBarColor } ]} />
      <View style={[ styles.navigationBarStyle, { backgroundColor: navigationBarColor } ]}>
        <TouchableOpacity onPress={Actions.pop} style={(onRightPress && rightText) ? styles.backContainerStyle : ''}>
          <Image style={styles.backButtonStyle}
            source={{ uri: backImageUri }} />
        </TouchableOpacity>
        <Text ellipsizeMode='tail' numberOfLines={1} style={[
          styles.titleStyle,
          { color: titleColor }
        ]}>{title}</Text>

        {
          onRightPress ? <TouchableOpacity onPress={onRightPress}>
          {
            rightText ? <Text style={[ styles.rightTextStyle, { color: titleColor } ]}
            ellipsizeMode='tail' numberOfLines={1}>
              {rightText}
            </Text> : <Image style={styles.rightImageStyle} source={{ uri: rightImageUri }} />
          }
          </TouchableOpacity> : <View style={styles.rightImageStyle} />
        }
      </View>
    </View>
  );
};

const styles = {
  statusBarStyle: {
    height: 20*Dim.Factor
  },
  navigationBarStyle: {
    width: Dim.Width,
    height: 44*Dim.Factor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButtonStyle: {
    width: 20*Dim.Factor,
    height: 20*Dim.Factor,
    marginLeft: 7*Dim.Factor
  },
  titleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18*Dim.Factor,
    color: '#fff'
  },
  rightImageStyle: {
    width: 20*Dim.Factor,
    height: 20*Dim.Factor,
    marginRight: 7*Dim.Factor
  },
  rightTextStyle: {
    width: 80*Dim.Factor,
    textAlign: 'right',
    fontSize: 16*Dim.Factor,
    color: '#fff',
    paddingRight: 7*Dim.Factor
  },
  backContainerStyle: {
    width: 80*Dim.Factor,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
};

export { CustomNavigationBar };
