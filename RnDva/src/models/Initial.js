import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {};

export default {
  namespace: 'Initial',
  state: { ...INITIAL_STATE },
  reducers: {},
  effects: {},
  subscriptions: {
    initialize() {
      _.delay(() => {
        Actions.tabbar({ type: 'reset' });
      }, 3000);
    }
  }
}
