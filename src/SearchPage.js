import React from 'react'
import {Component} from 'react'
import SearchForm from './SearchForm'

class SearchPage extends Component{


    render(){
        return(
            //calling the search form class
            <div className="test">
                <SearchForm/>
            </div>
        );
    }
}

export default SearchPage;
