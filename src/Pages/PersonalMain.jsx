import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import ImageParser from "react-image-parser";

import testImg from '../Sources/Img/192x192.png';

const PersonalMain = () => {
    const onImageParsed = ({data}) => console.log(data);

    return (
        <>
            <main>
                <article>
                    <section>
                        <div className="persubvisual">
                            <h1 className="visualsub">PERSONAL COLOR</h1>
                        </div>
                        <Container>
                            <div className="outlet">
                                <div className="percanvas">
                                    <ImageParser img={testImg} onImageParsed={onImageParsed}></ImageParser>
                                </div>
                            </div>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default PersonalMain;