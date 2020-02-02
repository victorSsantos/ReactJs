import React, {Component} from 'react';
import HomeButton from '../components/homebutton';
import SearchInput from '../components/search' ;
import './notfound.css';

export default class NotFound extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
        };
    }

    render () {
        return(
            <div className="Not-Found"  >
                <span className="Span-Home NotFound MenuHomeButton">
                    <HomeButton className="MenuHomeButton"/>
                </span>
                <span className="Span-Search NotFound">
                    <SearchInput/>
                </span>
            </div>
        );
    }
}