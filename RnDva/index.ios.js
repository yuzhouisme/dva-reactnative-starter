/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import dva from 'dva/mobile';
import Router from './src/Router';

import Initial from './src/models/Initial';
import Auth from './src/models/Auth';
import Homepage from './src/models/Homepage';
import Newbie from './src/models/Newbie';

const app = dva();

app.model(Initial);
app.model(Auth);
app.model(Homepage);
app.model(Newbie);

app.router(() => <Router />);


AppRegistry.registerComponent('RnDva', () => app.start());
