import React ,{Component} from 'react';
import axios from 'axios';
import './homebutton.css';
import {ReactComponent as SearchIcon} from '../img/Search Icon.svg';
import {withRouter } from 'react-router';


class HomeButton extends Component {
    render(){
        return (
            <span className="Github-Search" onClick={() => {this.props.history.push('/')}}>
                <span>Github</span>
                <span className="text-style-1"> Search</span>
            </span>
        )
    }
}

export default withRouter(HomeButton);