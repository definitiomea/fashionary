import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import TestMemberCard from "../Modules/TestMemberCard";

const MyPage = () => {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="mysubvisual">
                            <h1 className="visualsub">My Page</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col lg={9} style={{margin: "0px auto"}}>
                                    <div className="outlet">
                                        <div>
                                            <h3>내 정보</h3>
                                            <hr></hr>
                                            <TestMemberCard></TestMemberCard>
                                        </div>
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
 
export default MyPage;