import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
export class Home extends Component {
    static displayName = Home.name;


    componentDidMount() {

    }

    render() {
        return (
            <div>
                
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title><a href="/login"><Card.Img variant="top" src="/img/home/kakaosync.png" className="logo2" /></a></Card.Title>
                            <Card.Text>
                                카카오 로그인만으로 간단히 가입하는 기능 예제.<br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/login">[Tutorial]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title><a href="/fetch-data"><Card.Img variant="top" src="/img/home/kakaomap.png" className="logo2" /></a></Card.Title>
                            <Card.Text>
                                카카오 맵 활용 예제.<br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/fetch-data">[Tutorial]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title><a href="/counter"><Card.Img variant="top" src="/img/home/kakaomessage.png" className="logo2" /></a></Card.Title>
                            <Card.Text>
                                카카오톡 메세지 활용 예제.<br />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="/counter">[Tutorial]</a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/img/char11.jpg" className="logo2" />
                        <Card.Body>
                            <Card.Title>Kakao JavaScript SDK Wrapper</Card.Title>
                            <Card.Text>
                                카카오 JavaScript SDK의 손쉬운 사용을 위한 js 파일.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/kakao-tam/KakaoJavaScriptSDKWrapper">[GitHub]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char11.jpg" className="logo2" />
                        <Card.Body>
                            <Card.Title>Kakao API PHP Simple Pack</Card.Title>
                            <Card.Text>
                                카카오 REST API의 손쉬운 사용을 위한 PHP 클래스.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/kakao-tam/KakaoAPIForPHPSimplePack">[GitHub]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char21.jpg" className="logo2" />
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
                        <Card.Img variant="top" src="/img/char12.jpg" className="logo2" />
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
                        <Card.Img variant="top" src="/img/char22.jpg" className="logo2" />
                        <Card.Body>
                            <Card.Title>Amazon login - ASP.NET (framework 4.5) MVC5</Card.Title>
                            <Card.Text>
                                OWIN, Katana OAuth2를 이용한 Amazon 로그인 라이브러리
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.nuget.org/packages/Mcpelee.Owin.Security.Amazon/">[MicroSoft Nuget]</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/char23.jpg" className="logo2" />
                        <Card.Body>
                            <Card.Title>Naver login - ASP.NET (framework 4.5) MVC5</Card.Title>
                            <Card.Text>
                                OWIN, Katana OAuth2를 이용한 Naver 로그인 라이브러리
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.nuget.org/packages/Mcpelee.Owin.Security.Naver/">[MicroSoft Nuget]</a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
