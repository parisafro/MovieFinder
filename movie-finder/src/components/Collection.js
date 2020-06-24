import React from 'react';
import { Link } from 'react-router-dom' ;
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from '../API/movies';

class Collection extends React.Component{
    handelevent=async (collection)=>{
        const response=await movies.get(
            'search',{
            params:{
                part:'collection',
                maxResults:6,
                key: 'b8fa8bd9c21aa828ca2d0be64e443e62'
            }

        });
        console.log(response);        
    }

    render(){
        return(
            <div style={{padding:'20px'}}>
                <CardDeck >
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg"/>
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg" />
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg" />
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                    </CardDeck>
                    <CardDeck >
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg"/>
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg" />
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                    <Card style={{margin:'20px'}}>
                        <Card.Img variant="top" src="/mandala.jpg" />
                            <Card.Body>
                            <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                                <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                    </Card>
                </CardDeck>

            <CardDeck >
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg"/>
                    <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg" />
                <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg" />
                <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            </CardDeck>
            <CardDeck >
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg"/>
                <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg" />
                <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            <Card bg="dark" style={{margin:'20px'}}>
                <Card.Img variant="top" src="/mandala.jpg" />
                <Card.Body>
                    <Link className="card-link" to="/Detail"><Card.Title>Card title </Card.Title></Link>
                    </Card.Body>
            </Card>
            </CardDeck>

            </div>

        )
    }
}

export default Collection;