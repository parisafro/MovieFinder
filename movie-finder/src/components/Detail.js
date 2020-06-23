import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



class Collection extends React.Component{
    render(){
        return(
            <div className="bg">
                <div>
                <Container>
                    <Card className="justify-content-md-center align-items-center" style={{  margin : '100px' ,height : '500px' }} bg="dark" text="white">
                    <Row className="justify-content-md-center align-items-center">
                        <Col md={4}>
                        <Image style={{padding:'20px'}} src="./mandala.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title style={{padding:'20px'}}>Card title</Card.Title>
                            <Card.Text style={{padding:'20px'}} >
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                </Container>
                </div>
            </div>

        )
    }
}

export default Collection;

