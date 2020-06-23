import React from 'react';
import Card, { CardText } from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';



class Collection extends React.Component{
    render(){
        return(
                <div>

                <Container> 
                    <Card className="justify-content-md-center align-items-center" style={{  marginTop : '100px' ,height : '500px' }} bg="dark" text="white">
                    <Row className="justify-content-md-center align-items-center">
                        <Col md={4}>
                        <Image style={{padding:'20px'}} src="./mandala.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title style={{paddingLeft:'20px'}}><h1>Movie Name</h1></Card.Title>
                            <Card.Text style={{paddingLeft:'20px'}}><h2>Director Name</h2></Card.Text>
                            <Card.Text style={{paddingLeft:'20px'}} >
Adipisicing ex aliquip ipsum dolore. Velit veniam fugiat dolor magna sunt et tempor esse. Tempor sint exercitation dolore voluptate proident deserunt dolore incididunt.

Eiusmod qui cillum exercitation laboris exercitation veniam laboris duis cupidatat cillum. Esse aliqua magna cupidatat cupidatat nisi Lorem nostrud duis occaecat dolor fugiat amet. Proident nostrud ullamco officia quis qui id eu consequat voluptate ex. Est officia anim non ex proident voluptate occaecat minim. Eiusmod fugiat sit ad tempor ullamco consectetur id labore. Cillum aliquip officia sit ea culpa occaecat officia velit nisi consectetur amet qui nisi aliqua.

Ut ad sit consequat ad cillum commodo eiusmod veniam aliqua reprehenderit tempor ad do. Velit duis nisi reprehenderit mollit aliquip reprehenderit labore et adipisicing deserunt. Cupidatat excepteur cillum deserunt occaecat pariatur ullamco eiusmod mollit pariatur qui laborum. Nisi et aute anim adipisicing in labore et excepteur exercitation eiusmod deserunt elit. Non in ea sunt do aute fugiat qui excepteur anim voluptate enim mollit. Sit est qui sunt aliquip. Consectetur nostrud adipisicing laboris reprehenderit.
                            </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                    <Link to="/">
                        <Button style={{  marginTop : '10px'}} variant="outline-success">Back</Button>
                    </Link>
                </Container>
                </div>

        )
    }
}

export default Collection;

