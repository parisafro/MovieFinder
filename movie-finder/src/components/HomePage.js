import React from 'react';
import Search from './Search';
import Collection from './Collection';
import Footer from './Footer'; 

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