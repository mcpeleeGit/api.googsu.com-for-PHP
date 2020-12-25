import React, { Component } from 'react';
import axios from 'axios';
import '../Login.css';
import { default as User } from '../features/login/User';
export class LoginCallBack extends Component {

  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');   
    this.state = { code: code };
  }

  componentDidMount() {
    axios.get('/api/kakao/login/loginCallBack?code='+this.state.code).then((response) => {
      console.log(response);
      User.setUserLogin('true');
      User.setDataKey('id', response.data.result.id);
      User.setDataKey('email', response.data.result.kakao_account.email);
      User.setDataKey('nickname', response.data.result.kakao_account.profile.nickname);
      User.setDataKey('thumbnail', response.data.result.kakao_account.profile.thumbnail_image_url);
      this.props.history.push('/');
    });
  }

  render() {

    return (
      <div className="text-center">
        <h1>Login</h1>
        <h1 className="h3 mb-3 font-weight-normal">{User.getDataKey("nickname")}님, 반갑습니다.</h1>
        <img src={User.getDataKey("thumbnail")} alt={User.getDataKey("nickname")}></img>
      </div>
    );
  }
}

