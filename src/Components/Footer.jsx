import { Container, Row, Col } from "react-bootstrap";

const Footer = ({authenticate, setAuthenticate}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p>footer</p>        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;