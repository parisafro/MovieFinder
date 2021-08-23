import React, { useState, useEffect } from "react";
import { Button, Badge, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom' ;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(searchTerm!==''){
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=edef51f7&t=${searchTerm}`)
        .then((response) => response.json())
        .then((json) => setSearchResults(json))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchTerm]);

  useEffect(()=>{

  }, [])

  return (
    <>
      <Card style={{ width: "100%", height: "120px", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} className="bg-dark">
        <div style={{ position: "absolute", top: "10%", left: "16%" }}>
          <img src="https://img.icons8.com/material-outlined/48/ffffff/movie-projector.png" />
          <br />
          <span
            style={{
              color: "white",
              textAlign: "center",
              display: "block",
              position: "absolute",
              top: "10%",
              left: "110%",
            }}
          >
            Movie Box
          </span>
        </div>
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span></span>
            {/* <Button 
                        className='find' 
                        variant="danger">FIND NOW!
                        </Button> */}
          </div>
        </div>
        <Card.Body>
          <div style={{ color: "white", paddingTop:'50px', cursor:'pointer'}}>
            <Link style={{textDecoration:'none'}} to={`/Detail/${searchResults.imdbID}`}>
              <Card.Title style={{fontSize:'20px'},{padding:'5px'}, {color:'#ece4db'}}>
                {searchResults.Title}
              </Card.Title>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Search;
