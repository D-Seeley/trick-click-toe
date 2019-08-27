import React, { Component } from 'react';

const HOST_PUBLIC_GAME = 'Host Public Game';
const JOIN_PUBLIC_GAME = 'Join Public Game';
const HOST_PRIVATE_GAME = 'Host Private Game';
const JOIN_PRIVATE_GAME = 'Join Private Game';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            selection: 'Please Select',
            input: ''
        }
    }

    // componentDidMount() {

    // }

    // handleSubmit = ev => {
    //     e.preventDefault();

    // }

    render() {
        return (
            <div>
          
            <form>
                <h2>Choose How To Play</h2>
                <select >
                    <option value={HOST_PUBLIC_GAME}>{HOST_PUBLIC_GAME}</option>
                    <option value={JOIN_PUBLIC_GAME}>{JOIN_PUBLIC_GAME}</option>
                    <option value={HOST_PRIVATE_GAME}>{HOST_PRIVATE_GAME}</option>
                    <option value={JOIN_PRIVATE_GAME}>{JOIN_PRIVATE_GAME}</option>
                </select>
                <button >Select</button>
            </form>
            </div>
        );
    }
}