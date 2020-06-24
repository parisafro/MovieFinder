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
                    <Card className="justify-content-md-center align-items-center" style={{  marginTop : '100px' ,height : 'auto' }} bg="dark" text="white">
                    <Row className="justify-content-md-center align-items-center">
                        <Col lg={4}>
                        <Image style={{margin:'20px'}} src="./mandala.jpg" />
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title style={{paddingLeft:'20px', marginLeft:'60px',marginTop:'60px'}}><h1>Movie Name</h1></Card.Title>
                            <Card.Text style={{paddingLeft:'20px', marginLeft:'60px'}}><h2>Director Name</h2></Card.Text>
                            <Card.Text style={{paddingLeft:'20px', margin:'60px',marginTop:'0px'}} >
Adipisicing ex aliquip ipsum dolore. Velit veniam fugiat dolor magna sunt et tempor esse. Tempor sint exercitation dolore voluptate proident deserunt dolore incididunt.

Eiusmod qui cillum exercitation laboris exercitation veniam laboris duis cupidatat cillum. Esse aliqua magna cupidatat cupidatat nisi Lorem nostrud duis occaecat dolor fugiat amet. Proident nostrud ullamco officia quis qui id eu consequat voluptate ex. Est officia anim non ex proident voluptate occaecat minim. Eiusmod fugiat sit ad tempor ullamco consectetur id labore. Cillum aliquip officia sit ea culpa occaecat officia velit nisi consectetur amet qui nisi aliqua.

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

