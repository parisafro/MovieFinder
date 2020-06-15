import React, {useEffect, useState} from 'react';
import {Search,Collection} from './components/Source';
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
}

export default App;

