import React ,{Component} from 'react';
import axios from 'axios';
import './search.css';
import {ReactComponent as SearchIcon} from '../img/Search Icon.svg'

export default class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
        };
    }

    //Realiza request na api do git
    searchClick = () => {
        var uri = "https://api.github.com/users/" + this.state.perfilInput;

        axios.get(uri)
            .then(result => {
                //se request retorna status 200 (usuario encontrato), router acessa a pagina result
                console.log("usuario encontrato:" + result.data);
                this.setState({perfilContent: result.data});
                this.props.history.push('/result')
            }
        ).catch(error => {
            //Se 
            console.log("ERRO: " + error.message);
            this.props.history.push('/notfound')
        });
    }

    //Seta o state perfilInput com informação digitada no campo input
    handlerEvent = (event) => {
        this.setState({perfilInput: event.target.value})
    }

    render () {
        return(
            <div className="Home">
                <div className="Div-Search Github-Search">
                    <p>Github</p>
                    <p className="text-style-1"> Search</p>
                </div>
                <div className="Div-Input">
                    <input className="Search-Input " type='text'  onChange={this.handlerEvent}/>
                    <button onClick={this.searchClick}>
                        <SearchIcon/>
                    </button>
                </div>
            </div>
        );
    }
}