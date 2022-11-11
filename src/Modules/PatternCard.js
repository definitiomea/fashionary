import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

function PatternCard() {
  return (
    <Card className='card-indivi'>
      <Card.Img variant="top" src={require(`../Sources/Img/abstract-g834409429_1920.jpg`)} />
      <Card.Body>
        <Card.Title>Pattern</Card.Title>
        <Card.Text>
          다양한 패턴을 알려드립니다.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>New Updated</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to={"/category"} style={{textDecoration: "none", color: "coral"}}>확인해보기</Link>
      </Card.Body>
    </Card>
  );
}
 
export default PatternCard;