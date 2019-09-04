import React, { Component } from 'react';
import { connectGame } from '../socket/socketHandlerClient';

const HOST_PUBLIC_GAME = 'Host Public Game';
const JOIN_PUBLIC_GAME = 'Join Public Game';
const HOST_PRIVATE_GAME = 'Host Private Game';
const JOIN_PRIVATE_GAME = 'Join Private Game';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            selection: HOST_PUBLIC_GAME,
            input: ''
        }
    }

    handleUpdate = ev => {
        this.setState({selection: ev.target.value});
        console.log('selection is: ', ev.target.value);
    }

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(this.state);
        connectGame({ gameRequest: this.state.selection });

    }

    render() {
        return (
            <div>
          
            <form onSubmit={this.handleSubmit}>
                <h2>Choose How To Play</h2>
                <select onChange={this.handleUpdate}>
                    <option value={HOST_PUBLIC_GAME}>{HOST_PUBLIC_GAME}</option>
                    <option value={JOIN_PUBLIC_GAME}>{JOIN_PUBLIC_GAME}</option>
                    <option value={HOST_PRIVATE_GAME}>{HOST_PRIVATE_GAME}</option>
                    <option value={JOIN_PRIVATE_GAME}>{JOIN_PRIVATE_GAME}</option>
                </select>
                <button>Select</button>
            </form>
            </div>
        );
    }
}