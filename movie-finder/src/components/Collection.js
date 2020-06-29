import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom' ;
import { Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    <Card 
                    key={i} 
                    bg="dark" 
                    className="text-center"
                    style={{margin:"5px" }}>
                      <Card.Body>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
                            <Link className="card-link" to={`/Detail/${data.id}`}>
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
