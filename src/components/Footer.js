import React, { Component } from 'react';

export class Footer extends Component {



  render() {
    return (
      <div className="footer">
        <hr></hr>
        <p>상호 : 국수닷컴 (대표자:이동하) / 사업자 등록번호 : 636-33-00864</p>
        <p>주소 : 인천광역시 계양구 용종로 124 / Email : postmaster@googsu.com</p>
        <p><a href="/privacyPolicy">카카오 개인 정보 제3자 제공 동의</a> | <a href="/securityPrivacy">개인정보 처리 방침</a>
        | <a href="/terms">이용약관</a></p>
        
      </div>
    );
  }
}