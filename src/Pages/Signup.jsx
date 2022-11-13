import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "../Modules/SignUpForm";

const Signup = () => {
    return (
        <>
            <main>
                <article>
                    <section>
                        <Container>
                            <Row>
                                <Col lg={9} style={{margin: "0px auto"}}>
                                    <div className="signup-form">
                                        <SignUpForm></SignUpForm>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default Signup;