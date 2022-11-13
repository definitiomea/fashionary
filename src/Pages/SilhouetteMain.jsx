import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const SilhouetteMain = () => {
    const [silhouette, setSilhouette] = useState(null);
    const navigate = useNavigate();

    const getSilhouette = async () => {
        let url = `http://localhost:5000/silhouette/`
        let response = await fetch(url);
        let data = await response.json();
        setSilhouette(data);
    }

    useEffect(() => {
        getSilhouette();
    },[]);

    const dropToMove = () => {
        const dropMove = [];
        for(let i = 0; i < silhouette.length; i++) {
            dropMove.push(<Dropdown.Item onClick={() => {navigate(`/silhouette/${silhouette[i].id}`)}}>{silhouette[i].shape}</Dropdown.Item>);
        }
        return dropMove;
    }

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="silsubvisual">
                            <h1 className="visualsub">SILHOUTTE</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col lg={9} style={{margin: "0px auto"}}>
                                    <div className="outlet">
                                        <div className="dropcontain">
                                            <DropdownButton variant="outline-secondary" title="Choose silhouette Here">
                                                {silhouette && dropToMove()}
                                            </DropdownButton>
                                        </div>
                                        <Outlet></Outlet>
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
 
export default SilhouetteMain;