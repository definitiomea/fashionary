import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

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
                                <Col>
                                    <div className="outlet">
                                        <div className="contents-article">
                                            <h3>any pages</h3>
                                            <ol className="section1">
                                                <li>any subpages</li>
                                            </ol>
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