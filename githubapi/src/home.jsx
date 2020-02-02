import React ,{Component} from 'react';
import './home.css';
import SearchInput from './components/search'
import {withRouter } from 'react-router-dom'

export default class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
        };
    }

    render () {
        return(
            <div className="Home">
                <div className="Github-Search">
                    <span>Github</span>
                    <span className="text-style-1"> Search</span>
                </div>
                <SearchInput/>
            </div>
        );
    }
}