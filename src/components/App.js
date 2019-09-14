import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from './Game';
import GameDetails from './GameDetails';
import JoinGame from './JoinGame';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ActiveView = (this.props.gameId == 'none') ? <JoinGame /> : [<Game />, <GameDetails />];

        return (
            <div>
                <Header />
                {ActiveView}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ gameId }) => ({
        gameId
})

export default connect(mapStateToProps)(App)


