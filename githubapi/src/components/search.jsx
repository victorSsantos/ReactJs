import React ,{Component} from 'react';
import axios from 'axios';

export default class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
        };
    }

    searchClick = () => {
        var uri = "https://api.github.com/users/" + this.state.perfilInput;

        axios.get(uri)
            .then(result => {
                this.setState({perfilContent: result.data});
                this.props.history.push('/result')
            }
        ).catch(error => {
            console.log("ERRO: " + error.message);
            this.props.history.push('/notfound')
        });
    }

    handlerEvent = (event) => {
        this.setState({perfilInput: event.target.value})
    }

    render () {
        return(
        <div className="title">
            <h4>Search</h4>
            <p>Essa é minha página de busca</p>
            <input type='sub'  onChange={this.handlerEvent}/>
            <button onClick={this.searchClick}>Search</button>
        </div>
        );
    }
}