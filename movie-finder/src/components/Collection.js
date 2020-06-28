import React,{useEffect} from 'react';
import { Link } from 'react-router-dom' ;
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from '../API/movies';
import Axios from 'axios';

// function SetCollection(){
//     useEffect(() => {
//         Axios
//         .get("https://api.themoviedb.org/3/collection/10?api_key=b8fa8bd9c21aa828ca2d0be64e443e62&language=en-US")
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }, []);


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
