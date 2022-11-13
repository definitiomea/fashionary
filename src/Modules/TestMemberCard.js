import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom';

function TestMemberCard() {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);
    const date = new Date();

    return (
        <Card className='card-indivi'>
        <Card.Img variant="top" src={require(`../Sources/Img/vector-fabric-swatches.jpg`)} />
        <Card.Body>
            <Card.Title>{accountlist[0].nickname}</Card.Title>
            <Card.Text>
            가입일: {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>내 요청, 기여 내역 보기</ListGroup.Item>
            <ListGroup.Item>내 체크 리스트 보기</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to={"/mymodify"} style={{textDecoration: "none", color: "coral"}}>수정하기</Link>
        </Card.Body>
        </Card>
    );
}
 
export default TestMemberCard;