import React ,{Component} from 'react';
import './home.css';
import SearchInput from './components/search'

export default class Home extends Component {
    render () {
        return(
            <div className="Home">
                <span className="Span-Logo">
                    <span className="Logo" onClick={() => {this.props.history.push('/')}}>
                        <span>Github</span>
                        <span className="text-style-1"> Search</span>
                    </span>
                </span>
                <span className="Span-Search">
                    <SearchInput/>
                </span>
            </div>
        );
    }
}