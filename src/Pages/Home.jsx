import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="homesubvisual">
                            <h1 className="visualsub">HOME</h1>
                        </div>
                        <Container>
                            <div className="outlet">
                                <h1>MAYBE SLICK HERE</h1>
                            </div>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default Home;