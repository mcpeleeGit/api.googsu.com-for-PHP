import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Board } from './components/Board/BoardList';
import { ReduxCounter } from './features/counter/Counter';
import './custom.css'
import { default as User } from './features/login/User';

export default class App extends Component {
  static displayName = App.name;

  initializeUserInfo = async () => {
    console.log("test"); //PHP 세션에서 로그인 여부와 프로필 가져오기
  }  

  componentDidMount() {
    this.initializeUserInfo();
  }  

  render () {
    const isLoginFetchData = User.isLogin() ? FetchData : Login;
    
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={isLoginFetchData} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/board' component={Board} />
        <ReduxCounter />
      </Layout>
    );
  }
}
