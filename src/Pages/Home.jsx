import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import PrevArrow from "../Modules/PrevArrow";
import NextArrow from "../Modules/NextArrow";

import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

import SilhouetteCard from '../Modules/SilhouetteCard';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="homesubvisual">
                            <h1 className="visualsub">HOME</h1>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="card-area">
                                        <Slider {...settings}>
                                            <SilhouetteCard></SilhouetteCard>
                                            <SilhouetteCard></SilhouetteCard>
                                            <SilhouetteCard></SilhouetteCard>
                                            <SilhouetteCard></SilhouetteCard>
                                            <SilhouetteCard></SilhouetteCard>
                                        </Slider>
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
 
export default Home;