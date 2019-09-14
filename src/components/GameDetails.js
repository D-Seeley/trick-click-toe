import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { gameId, isPrivateGame, userId } = this.props; 
        return (
            <div>
                <p>Game ID is {gameId} (Private: {isPrivateGame.toString()})</p>
                <p>User ID is {userId}</p>
            </div>
        )

    }
}

const mapStateToProps = ({ gameId, isPrivateGame, userId }) => {
    console.log('isPrivateGame is: ', isPrivateGame);
    return {
        gameId,
        userId,
        isPrivateGame
    }
}

export default connect(mapStateToProps)(GameDetails);
