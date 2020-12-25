import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>Welcome to my tutorial web site:</p>
                <img src="/img/home.jpg" alt="home" className="w-75 p-3" />
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title><Card.Img variant="top" src="/img/home/kakaosync.png" /></Card.Title>
                            <Card.Text>
                                카카오 로그인만으로 간단히 가입하는 기능 예제.<br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/login">[Tutorial]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char11.jpg" />
                        <Card.Body>
                            <Card.Title>Kakao API PHP Simple Pack</Card.Title>
                            <Card.Text>
                                카카오 REST API의 손쉬운 사용을 위한 PHP 클래스.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="http://test-tam.pe.kr/PHPSimplePack.php">[Example]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char21.jpg" />
                        <Card.Body>
                            <Card.Title>ReBoPA</Card.Title>
                            <Card.Text>
                                PHP를 이용한 REST API 라우팅 아키텍쳐와 React간의 MVC아키텍쳐
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://github.com/mcpeleeGit/web.googsu.com_react_raw">[GitHub]</a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/img/char12.jpg" />
                        <Card.Body>
                            <Card.Title>kakao login - ASP.NET (framework 4.5) MVC5</Card.Title>
                            <Card.Text>
                                OWIN, Katana OAuth2를 이용한 카카오 로그인 라이브러리
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.nuget.org/packages/Mcpelee.Owin.Security.Kakao/">[MicroSoft Nuget]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char22.jpg" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char23.jpg" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            
              </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
