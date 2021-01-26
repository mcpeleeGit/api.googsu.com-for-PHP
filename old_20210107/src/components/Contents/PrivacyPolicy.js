import React, { Component } from 'react';

export class PrivacyPolicy extends Component {
  static displayName = PrivacyPolicy.name;

  render () {
    return (
      <div>
        <h1>개인 정보 제3자 제공 동의</h1>
        <p>국수닷컴은 고객님의 개인정보를 회원가입 시 아래와 같이 고지 또는 명시하여 동의 받은 범위 내에서 제3자에게 제공합니다.</p>
        <ul>
          <li>제공받는 자 : 우체국</li>
          <li>제공 목적 : 사이트 이용 정보 우편 전달</li>
          <li>제공 항목 : 배송지 정보</li>
          <li>보유 및 이용기간 : 회원 탈퇴시까지</li>
        </ul>
        <p>이용자의 개인정보는 원칙적으로 위 사항 외에 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
        <ul>
          <li>이용자들이 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
      </div>
    );
  }
}
