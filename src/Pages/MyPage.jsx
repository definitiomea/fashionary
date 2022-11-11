import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyPage = () => {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);

    return (
        <>
            <main>
                <article>
                    <section>
                        <Container>
                            <div className="outlet">
                                <h1>MY PAGE HERE</h1>
                            </div>
                        </Container>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default MyPage;