import { Container, Row, Col } from "react-bootstrap";

const Footer = ({authenticate, setAuthenticate}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="footer">
                            <p>footer</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;