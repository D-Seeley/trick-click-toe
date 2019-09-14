import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Game ID is {this.props.gameId}</p>
                <p>User ID is {this.props.userId}</p>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    gameId: state.gameId,
    userId: state.userId
})

export default connect(mapStateToProps)(GameDetails);
