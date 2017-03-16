import { delay } from "../services/Countdown";

const INITIAL_STATE = {
  phone: '',
  password: '',
  secure: true,
  enable: false,
  checked: true,

  running: false,
  countdown: 0,

  loading: false
};

export default {
  namespace: 'Newbie',
  state: { ...INITIAL_STATE },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true, error: '' };
    },
    hideLoading(state) {
      return { ...state, loading: false, error: '' };
    },

    phoneChanged(state, action) {
      return { ...state,
        phone: action.payload,
        enable: (action.payload.length == 11 && state.password.length >= 6) ? true : false
      };
    },
    passwordChanged(state, action) {
      return { ...state,
        password: action.payload,
        enable: (action.payload.length >= 6 && state.phone.length == 11) ? true : false
      };
    },
    secureChanged(state, action) {
      return { ...state, secure: !state.secure };
    },
    checkedChanged(state, action) {
      return { ...state, checked: !state.checked };
    },

    getCaptchaSuccess(state, action) {
      return {
        ...state,
        running: true,
        countdown: 60
      }
    },
    countdown(state, action) {
      return { ...state, countdown: action.payload };
    },
    stopCountdown(state) {
      return { ...state, running: false, countdown: 0 };
    },
  },
  effects: {
    *getCaptcha ({
      payload
    }, {call, put, select}) {
      yield put({type: 'showLoading'})

      const ret = { data: { result_code: 'SUCCESS' } } // 假定获取验证码成功
      if (ret.data.result_code === "SUCCESS") {
        yield put({type: 'getCaptchaSuccess'});
        yield put({type: 'hideLoading'})

        yield delay(1000); // 补1s

        while (true) {
          let countdown = yield select(state => state.Newbie.countdown);
          if (countdown > 0) {
            countdown--
            yield put({ type: 'countdown', payload: countdown });
            yield delay(1000);
          } else {
            yield put({ type: 'stopCountdown' });
            return;
          }
        }
      } else {
        yield put({type: 'hideLoading'})
      }
    },
    * onRegister ({
      payload
    }, {call, put}) {
      console.log('onRegister', payload);
    }
  },
  subscriptions: {

  }
};
