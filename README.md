# dva-reactnative-starter

This project is designed to help those who use dva to develop an native-app(it also can develop web app). In a word, this is a simple example.

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[Dva](https://github.com/dvajs/dva)

## What's include?

1. [Dva](https://github.com/dvajs/dva), Lightweight front-end framework based on redux, redux-saga and react-router@2.x. (Inspired by elm and choo)

[Dva Knowledgemap](https://github.com/dvajs/dva-knowledgemap)

[Quick Start (12 步 30 分钟，完成用户管理的 CURD 应用) (react+dva+antd)](https://github.com/sorrycc/blog/issues/18)

2. [React-Motion](https://github.com/chenglou/react-motion), A spring that solves your animation problems.

It's Works with React-Native v0.18+. In addition, I have written two examples on the web application. If you are interested in the animation, you should go to look at it. (Additional knowledge.)

[react-motion-tab-animate](https://github.com/yuzhouisme/react-motion-tab-animate)

[react-motion-nav-animate](https://github.com/yuzhouisme/react-motion-nav-animate)

## Screenshot

![Screenshot](https://github.com/yuzhouisme/dva-reactnative-starter/blob/master/Screenshot/screenshot.gif)

## Getting started

1. Clone this repo.

2. Modify something in package.json like name to "your-project-name".

3. Run npm install.

```bash
$ npm install
```

4. Run.

```bash
$ react-native run-ios
```

## Explanation

1. To know the directory structure.

```
$ tree . -L 3
.
├── android
├── assets // saved image resources who variable
├── index.android.js // root entrance for android platform!!
├── index.ios.js // root entrance!!
├── ios
├── node_modules
├── package.json
├── src
│   ├── Router.js // all routing
├── components // dumb component
│   ├── Login.js
│   ├── Splash.js
│   └── common
├── models
│   ├── Auth.js
│   ├── Find.js
│   ├── Homepage.js
│   ├── Initial.js
│   └── Newbie.js
├── routes // smart component
│   ├── Find.js
│   ├── Homepage.js
│   ├── Login.js
│   ├── More.js
│   ├── Register.js
│   └── Register2.js
├── services
├── utils // such as config, request, defaults
└── yarn.lock
```

2. The whole entrance is index.jsx. I try to describe clearly why import that.

```
...
const app = dva();

// Load models. In web application can use dynamic routing, But in native-app maybe don't need
app.model(Initial);
app.model(Auth);
app.model(Homepage);
app.model(Newbie);
app.model(Find);

app.router(() => <Router />);

AppRegistry.registerComponent('RnDva', () => app.start());
```

3. Dva/Redux/React-Router, reading some documents will help you.

4. Look at 'subscriptions' (in models/Initial.js), when app in Splash screen, then will jump to Homepage after 3s.
```
...
subscriptions: {
  initialize() {
    _.delay(() => {
      Actions.tabbar({ type: 'reset' });
    }, 3000);
  }
}
```

## Inspiration

Thanks to [dvajs group](https://github.com/dvajs) for providing the lightweight framework for developers. And in work I am a mobile application developer as android/iOS platform, before using dva, I have been using the reactnative+reudx+redux-thunk. I have subscribed to issue list for a long time. I saw a lot of issues have been proposed, and soon be solved. Thanks to the team and chencheng (云谦) once again.

Thank you for reading.

## 

logo_ico.png from [rezzzzzzz's Oh My D.VA](https://dribbble.com/rezzzzzz) who in [dribbble](https://dribbble.com). Thank rezzzzzzz! She's so pink :)
