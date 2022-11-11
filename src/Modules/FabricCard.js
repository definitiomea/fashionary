import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

function FabricCard() {
  return (
    <Card className='card-indivi'>
      <Card.Img variant="top" src={require(`../Sources/Img/vector-fabric-swatches.jpg`)} />
      <Card.Body>
        <Card.Title>Fabric</Card.Title>
        <Card.Text>
          다양한 원단을 알려드립니다.
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
 
export default FabricCard;