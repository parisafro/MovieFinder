import React from 'react';
import { Link } from 'react-router-dom' ;
import {Search,Footer,Collection} from './components/Source';
import { render } from '@testing-library/react';

class HomePage extends React.Component{
    render(){
        return(
                <div>
                    <Search></Search>
                    <Collection></Collection>
                    <Footer></Footer>
                </div>

        )
    }
}
export default HomePage;