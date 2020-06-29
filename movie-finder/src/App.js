import React from 'react';
import {HomePage,Detail} from './components/Source';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

