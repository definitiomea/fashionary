import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = ({authenticate, setAuthenticate}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="footer">
                            <div>
                                <h3 className="footer-title">FASHIONARY</h3>
                                <ul className="footer-icon">
                                    <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
                                    <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
                                    <li><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></li>
                                    <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer-menu">
                                    <li>매체소개</li>
                                    <li>고객센터</li>
                                    <li>개인정보처리방침</li>
                                    <li>이용약관</li>
                                    <li>이메일무단수집금지</li>
                                    <li>문의</li>
                                    <li>윤리경영</li>
                                </ul>
                                <ul className="footer-info">
                                    <li>Hans Maison</li>
                                    <li>10 - 11F, 165, Dosan-daero, Gangnam-gu, Seoul, Republic of Korea</li>
                                    <li>Representative : Ju-Han Park</li>
                                    <li>E-mail: fashionary.kor@mailthis.com</li>
                                </ul>
                                <p className="copyright">&copy; 2022 Hans Maison. All Rights Reserved.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;