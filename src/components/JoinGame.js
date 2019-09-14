import React, { Component } from 'react';
import { connectGame } from '../socket/socketHandlerClient';

const CREATE_PUBLIC_GAME = 'Create Public Game';
const JOIN_PUBLIC_GAME = 'Join Public Game';
const HOST_PRIVATE_GAME = 'Host Private Game';
const JOIN_PRIVATE_GAME = 'Join Private Game';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            selection: CREATE_PUBLIC_GAME,
            input: ''
        }
    }

    handleSelectionUpdate = ev => this.setState({...this.state, selection: ev.target.value});

    handleInputText = ev => this.setState({...this.state, input: ev.target.value})

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(this.state);
        connectGame({ gameRequest: this.state.selection, input: this.state.input });

    }

    render() {
        return (
            <div>
          
            <form onSubmit={this.handleSubmit}>
                <h2>Choose How To Play</h2>
                <select onChange={this.handleSelectionUpdate}>
                    <option value={CREATE_PUBLIC_GAME}>{CREATE_PUBLIC_GAME}</option>
                    <option value={JOIN_PUBLIC_GAME}>{JOIN_PUBLIC_GAME}</option>
                    <option value={HOST_PRIVATE_GAME}>{HOST_PRIVATE_GAME}</option>
                    <option value={JOIN_PRIVATE_GAME}>{JOIN_PRIVATE_GAME}</option>
                </select>
                {(this.state.selection == JOIN_PRIVATE_GAME) ? <input 
                    defaultValue={''} 
                    name={"input"}
                    onChange={this.handleInputText}
                    /> : null }
                <button>Select</button>
            </form>
            </div>
        );
    }
}