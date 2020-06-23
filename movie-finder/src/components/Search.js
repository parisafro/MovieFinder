import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component{
    state={    
        SearchTerm:'',
    }
    render() {
        // function parisa() {
        // const [show, setShow] = useState(false);
            return(
                <div>
                    <Card className="text-center bg-dark">
                        <Card.Body style={{marginTop: "100px"}}>
                            <Card.Title>
                                <Badge variant="success">
                                    <h1>
                                        Welcome to Movie Finder
                                    </h1>
                                </Badge>
                            </Card.Title>

                            <Card.Text className="text-light" style={{margin: "40px"}}>
                            <h3>
                            Find your favorite movie
                            </h3>
                            </Card.Text>
                            {/* <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
                                <input 
                                type="text" 
                                placeholder="Search" 
                                className="rounded mr-2"/>
                            </Toast> */}
                            {/* btn style={{marginTop: "50px"}} variant="danger" onClick={() => setShow(true)} */}
                            <Button 
                            style={{paddingTop: "70px"},
                            {fontSize:"20px"}} 
                            variant="danger">FIND NOW!
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            );
        }    
         
    // }
    
}
export default Search;