import React,{useState} from "react";
import { Button, Badge, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component{
    state={    
        SearchTerm:'',
    }
    render() {
            return(
                <div>
                    <Card style={{width:'100%', height:'150px'}} className=" bg-dark">
                        <div style={{position:'absolute', top:'30%', left:'46%'}}>
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/movie-projector.png"/>
                            <br/>
                            <span style={{color:'white', textAlign:'center', display:'block',position:'absolute', top:'10%', left:'110%'}}>Movie Box</span>
                        </div>
                        <div className='search-container'>
                            <div className='search-box'>
                                <input type="text" />
                                <span></span>
                                {/* <Button 
                                className='find' 
                                variant="danger">FIND NOW!
                                </Button> */}
                            </div>
                        </div>
                        <div class="carousel-item bg-danger">
                            <img src="" alt=""></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>dljldf</h5>
                                    <p>djlfjdf</p>
                                </div>
                        </div>
                        <Card.Body style={{marginTop: "100px"}}>
                            {/* <Card.Title>
                                <Badge variant="success">
                                    <div>
                                    <i class="fas fa-video"></i>
                                    </div>
                                    <h1>
                                        Welcome to Movie Finder
                                    </h1>
                                </Badge>
                            </Card.Title> */}
                            {/* <Card.Text className="text-light" style={{margin: "40px"}}>
                            <h3>
                            Find your favorite movie
                            </h3>
                            </Card.Text> */}
                            {/* <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
                                <input 
                                type="text" 
                                placeholder="Search" 
                                className="rounded mr-2"/>
                            </Toast> */}
                            {/* btn style={{marginTop: "50px"}} variant="danger" onClick={() => setShow(true)} */}

                        </Card.Body>
                    </Card>
                </div>
            );
        }    
         
    // }
    
}
export default Search;