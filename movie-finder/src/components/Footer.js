import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render() {
        return(
            <div className="bg-dark" style={{height:'100px'}}>
                <Container className="text-light text-center">
                    <Row lg style={{padding:'20px'}}>
                        <Col>Terms</Col>
                        <Col>Privacy</Col>
                        <Col>Security</Col>
                        <Col>Status</Col>
                        <Col>Help</Col>
                    </Row>
                    <small>All rights reserved.</small>
                </Container>
            </div>

        )
    }
}

export default Footer;