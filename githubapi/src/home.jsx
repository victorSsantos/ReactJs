import React ,{Component} from 'react';
import './home.css';
import SearchInput from './components/search'
import HomeButton from './components/homebutton'

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
            <div className="Home"  >
                <span className="Span-Home">
                    <HomeButton/>
                </span>
                <span className="Span-Search">
                    <SearchInput/>
                </span>
            </div>
        );
    }
}