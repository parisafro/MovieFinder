import React from 'react';
import { Link } from 'react-router-dom' ;
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';



class Collection extends React.Component{
    render(){
        return(

            <div style={{padding:'20px'}}>
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