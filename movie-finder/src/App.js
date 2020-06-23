import React, {useEffect, useState} from 'react';
import {HomePage,Detail} from './components/Source';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { render } from '@testing-library/react';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Detail" component={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

