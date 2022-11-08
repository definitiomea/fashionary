import { Container, Row, Col } from "react-bootstrap";

const BrandsMain = () => {
    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="brandsubvisual">
                            <h1 className="visualsub">BRANDS</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="outlet">
                                        <h1>Brands Main here</h1>
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
 
export default BrandsMain;