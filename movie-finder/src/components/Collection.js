import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


class Collection extends React.Component{
    render(){
        return(
            <div>
            <CardGroup style={{padding:"20px"}}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src="/mandala.jpg"/>
                        <Card.Body>
                            <Card.Title>card title </Card.Title>
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
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup style={{padding:"20px"}}>
                <Card style={{margin:"20px"}}>
                    <Card.Img variant="top" src="/mandala.jpg"/>
                        <Card.Body>
                            <Card.Title>card title </Card.Title>
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
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>
            </CardGroup>
            </div>
        )
    }
}

export default Collection;