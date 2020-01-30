import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        numero: this.props.numero
    }

    plusOne = () => {
        this.setState({numero: this.state.numero + 1})
    }

    lessOne = () => {
        this.setState({numero: this.state.numero - 1})
    }

    changeNumber = (number) => {
        this.setState({numero: this.state.numero + number})
    }

    render () {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.plusOne}>+</button>
                <button onClick={this.lessOne}>-</button>
                <button onClick={() => this.changeNumber(10)}>+10</button>
                <button onClick={() => this.changeNumber(-10)}>-10</button>
            </div>
        )
    }
}


// Solução 01
// constructor(props){
//     super(props)

//     this.plusOne = this.plusOne.bind(this)
// }

// Solução 02
// <button onClick={() => this.plusOne}>Inc</button>
