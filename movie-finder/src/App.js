
import React, {useEffect, useState} from 'react';
import {Search,Collection} from './components/Source';
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { render } from '@testing-library/react';

class App extends React.Component{
  render(){
    return(
      <div>
        <Search></Search>
        <Collection></Collection>
      </div>
    )
  }


// function App() {
//   return (
//     <Card className="text-center">
//     <Card.Header>Featured</Card.Header>
//     <Card.Body>
//       <Card.Title>Special title treatment</Card.Title>
//       <Card.Text>
//         With supporting text below as a natural lead-in to additional content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//     <Card.Footer className="text-muted">2 days ago</Card.Footer>
//   </Card>
//   );
}

export default App;

