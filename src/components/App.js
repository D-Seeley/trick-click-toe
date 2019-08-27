import React, { Component } from 'react';
// import { HashRouter, Link, Route } from 'react-router-dom';
import io from '../socket/socketSingleton';
// const socket = io();

import Game from './Game';
import JoinGame from './JoinGame';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            gameId: 'none'
        }
    }

    componentDidMount() {
    //     io.on('receiveGame', (gameId)=> {
    //         this.setState({ gameId })
    //     })
    }

    render() {
        const ActiveView = (this.state.gameId == 'none') ? <JoinGame /> : <Game />

        return (
            <div>
                <Header />
                {ActiveView}
                <Footer />
            </div>
        )
    }
}

