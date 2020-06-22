import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render() {
        return(
            <div className="bg-dark" style={{height:'150px'}}>
                <Container className="text-light">
                    <Row md={4} style={{padding:'20px'}}>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row style={{padding:'20px'}}>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Footer;