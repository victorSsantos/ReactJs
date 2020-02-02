import React, {Component} from 'react';
import HomeButton from '../components/homebutton';
import SearchInput from '../components/search' ;
import './result.css'

export default class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
        };
    }

    render () {
        return(
            <div className="Result" >
                <span className="Span-Home Menu">
                    <HomeButton className="Github-Search Menu"/>
                </span>
                <span className="Span-Search Menu">
                    <SearchInput/>
                </span>
            </div>
        );
    }
}