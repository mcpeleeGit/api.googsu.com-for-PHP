import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { LoginCallBack } from './components/LoginCallBack';

import { SignUp } from './components/SignUp';

import { PrivacyPolicy } from './components/Contents/PrivacyPolicy';
import { SecurityPrivacy } from './components/Contents/SecurityPrivacy';
import { Terms } from './components/Contents/Terms';

import { BoardList } from './components/Board/BoardList';
import { BoardRead } from './components/Board/BoardRead';
import { BoardWrite } from './components/Board/BoardWrite';
import { BoardUpdate } from './components/Board/BoardUpdate';

import { WhatIs } from './components/ReBoPAW/WhatIs';
import { Tutorial } from './components/ReBoPAW/Tutorial';
import { Achitecture } from './components/ReBoPAW/Achitecture';

import { AToDo } from './components/AToDo/AToDo';

import './custom.css'
import { default as User } from './features/login/User';

export default class App extends Component {
  static displayName = App.name;

  initializeUserInfo = async () => {
    //console.log("test"); //PHP 세션에서 로그인 여부와 프로필 가져오기
  }  

  componentDidMount() {
    this.initializeUserInfo();
  }  

  render () {
    const isLoginFetchData = User.isLogin() ? FetchData : FetchData;
    const isLoginCounter = User.isLogin() ? Counter : Login;
    
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={isLoginCounter} />
        <Route path='/fetch-data' component={isLoginFetchData} />
        <Route path='/login' component={Login} />
        <Route path='/loginCallBack' component={LoginCallBack} />
        
        <Route path='/signup' component={SignUp} />

        <Route path='/privacyPolicy' component={PrivacyPolicy} />
        <Route path='/securityPrivacy' component={SecurityPrivacy} />
        <Route path='/terms' component={Terms} />

        <Route path='/board-list' component={BoardList} />
        <Route path='/board-read' component={BoardRead} />
        <Route path='/board-write' component={BoardWrite} />
        <Route path='/board-update' component={BoardUpdate} />

        <Route path='/what-is-rebopaw' component={WhatIs} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/achitecture' component={Achitecture} />

        <Route path='/atodo' component={AToDo} />

      </Layout>
    );
  }
}
