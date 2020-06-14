import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [show, setShow] = useState(false);

  return (

    <div>

      {/* --header-- */}
      <Card className="text-center bg-dark">
        <Card.Body style={{marginTop: "100px"}}>
          <Card.Title>
            <Badge variant="warning">
              <h1>
                Welcome to Movie Finder
              </h1>
            </Badge>
          </Card.Title>

          <Card.Text className="text-warning" style={{marginTop: "40px"}}>
            <h3>
              Find your favorit movie
            </h3>
          </Card.Text>

        {/* --! search !-- */}
          <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
            <input 
            type="text" 
            placeholder="Search" 
            className="rounded mr-2"/>
          </Toast>
          <Button style={{marginTop: "50px"}} variant="danger" onClick={() => setShow(true)}>FIND NOW!</Button>


        {/* -- cards -- */}
        <CardGroup style={{padding:"20px"}}>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          
        </CardGroup>
        <CardGroup style={{padding:"20px"}}>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{margin:"20px"}}>
            <Card.Img variant="top" src="/mandala.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Card.Body>
      <Card.Footer className="text-muted" width={171}>footer</Card.Footer>
    </Card>

    </div>

  );
}

export default App;

