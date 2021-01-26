import React, { Component } from 'react';
import axios from 'axios';
import '../Login.css';
import { default as User } from '../features/login/User';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
export class LoginCallBack extends Component {

  constructor(props) {
    super(props);
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    this.state = { code: code };
  }

  componentDidMount() {
    axios.get('/api/kakao/login/loginCallBack?code=' + this.state.code).then((response) => {
      console.log(response);
      User.setUserLogin('true');
      User.setDataKey('id', response.data.result.id);
      //User.setDataKey('email', response.data.result.kakao_account.email);
      User.setDataKey('nickname', response.data.result.kakao_account.profile.nickname);
      User.setDataKey('thumbnail', response.data.result.kakao_account.profile.thumbnail_image_url);
      //this.props.history.push('/');
    });

  }

  render() {

    return (
      <div className="text-center">
        <h1>Login</h1>
        <h2 className="h3 mb-3 font-weight-normal">{User.getDataKey("nickname")}님, 반갑습니다.</h2>
        <img src={User.getDataKey("thumbnail")} alt={User.getDataKey("nickname")}></img>
        <p></p>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Header>로그인과 권한 획득</Card.Header>
              <Card.Text>
                (1) 카카오 싱크 설정이 되었다면, 로그인시 가입 약관이 표시되고 카카오로 부터 고객 정보를 받아옵니다. 로그인 시, 카카오톡 채널에도 함께 가입됩니다.
                </Card.Text>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Header>프로필 조회</Card.Header>
              <Card.Text>
                (2) 프로필은 가입 시, 필수로 받아오는 정보와 이용중 동의하는 정보로 나눠집니다.
                </Card.Text>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Header>카카오톡 메세지</Card.Header>
              <Card.Text>
                (3) 권한 설정과 승인이 되었다면 카카오톡 메세지 발송도 가능합니다.
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <p></p>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Header>카카오톡 채널</Card.Header>
              <Card.Text>
                (4) 가입 시, 약관에 동의 했다면 채널은 자동 가입됩니다.
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Header>로그아웃</Card.Header>
              <Card.Text>
                (5) 현재 사이트에서 로그 아웃 합니다.
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Header>링크 해제</Card.Header>
              <Card.Text>
                (6) 사이트와 카카오톡 간의 연결을 끊습니다.
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

