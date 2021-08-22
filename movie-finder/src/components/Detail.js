import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Image ,Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Detail(){

    const path = window.location.pathname
    let match = path.substring(path.lastIndexOf('/') + 1)

    const [detail,setDetail]=useState([]);
        useEffect(() => {
            
        axios
        .get(`https://api.themoviedb.org/3/movie/${match}?api_key=b8fa8bd9c21aa828ca2d0be64e443e62`)
        .then(res => {
            setDetail(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    console.log(detail);
        return(
                <div>
                <Container> 
                    <Card className="justify-content-md-center align-items-center" style={{  marginTop : '100px' ,height : '500px' }} bg="dark" text="white">
                        <Row className="justify-content-md-center align-items-center">
                            <Col lg={4}>
                            <Link to="/">
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/back.png"/>
                            </Link>
                            <Image style={{margin:'20px' ,maxWidth:"400px",maxHeight:"400px"}} src={'https://image.tmdb.org/t/p/w500' + detail.poster_path} />
                            </Col>
                            <Col>
                                <Card.Body>
                                <Card.Title style={{paddingLeft:'20px', marginLeft:'60px',marginTop:'60px'}}><h1>{detail.title}</h1></Card.Title>
                                <Card.Text style={{paddingLeft:'20px', marginLeft:'60px'}}><h2>{detail.director}</h2></Card.Text>
                                <Card.Text style={{paddingLeft:'20px', margin:'60px'}} >
                                    {detail.overview}
                                </Card.Text>
                                </Card.Body>
                                <Card.Text style={{paddingLeft:'110px'}} >
                                release date : {detail.release_date}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card>
                </Container>
                </div>

        )
    }

