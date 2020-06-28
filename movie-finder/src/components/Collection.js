<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import axios from 'axios';
=======
import React,{useEffect} from 'react';
>>>>>>> 34e4f6290e3e2631e9308c26069a23f27dd666f3
import { Link } from 'react-router-dom' ;
import { Card, Container, Row, Col }from 'react-bootstrap';
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


export default function Collection(){
    const [top,settop]=useState([]);
        useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8fa8bd9c21aa828ca2d0be64e443e62`)
        .then(res => {
            settop(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const movies=top.map((data,i)=>{
        return(
<<<<<<< HEAD
                    <Card 
                    key={i} 
                    bg="dark" 
                    className="text-center"
                    style={{margin:"5px" }}>
                      <Card.Body>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
                            <Link className="card-link" to="/Detail">
                                <Card.Title>
                                    {data.title}
                                </Card.Title>
                            </Link>
                        </Card.Body>
                    </Card>


        );
    });

    return(
        <div>
          <Container>
            <Row style={{margin:'10px',justifyContent: 'center'}} xs={2} md={4} lg={6} >
            {movies}
            </Row>
           </Container>
        </div>

    )
    
};

// export default Collection;
=======
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
>>>>>>> 34e4f6290e3e2631e9308c26069a23f27dd666f3
