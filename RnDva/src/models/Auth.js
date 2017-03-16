import { signInWithEmailAndPassword, signOut } from '../services/Auth';

const INITIAL_STATE = {
  phone: '',
  password: '',
  secure: true,
  enable: false,

  user: null,
  loading: false
};

export default {
  namespace: 'Auth',
  state: { ...INITIAL_STATE },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true, error: '' };
    },

    phoneChanged(state, action) {
      return { ...state,
        phone: action.payload,
        enable: (action.payload.length > 0 && state.password.length > 0) ? true : false
      };
    },
    passwordChanged(state, action) {
      return { ...state,
        password: action.payload,
        enable: (action.payload.length > 0 && state.phone.length > 0) ? true : false
      };
    },
    secureChanged(state, action) {
      return { ...state, secure: !state.secure };
    },

  },
  effects: {
    * login({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });

    },
    * logout({ payload }, { call }) {
      yield call(signOut);
    }
  },
  subscriptions: {}
};
