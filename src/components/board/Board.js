import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clientMove } from '../../socket/socketHandlerClient';

const Square = props => {
    const { onClick, color, value, idx } = props;
    let style = '';

    if (idx == 1 || idx == 4 || idx == 7) style += ' vert';
    if (idx == 3 || idx == 4 || idx == 5) style += ' hori';

    const className = 'square' + (color ? ' ' + color : '') + style;

    return (
        <td className={className} onClick={onClick} >{value}</td>
    )
}

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        const { board } = this.props;
        const rows = [];
        let row = []

        board.forEach((el, idx)=> {
            row.push(<Square
                onClick={ ()=> {
                    console.log('click idx: ', idx, ' is ', el);
                    clientMove(idx);
                }}
                color={ el }
                value={  el }
                idx={ idx }
                key={ idx }
            />)
            if (row.length == 3) {
                rows.push(row);
                row = [];
            }
        })

        return (
            <div>
                <table>
                    <tbody>
                        {rows.map((el, idx) => <tr key={ idx }>{el}</tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ board }) => ({
    board
})

const mapDispatchToProps = dispatch => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(Board);

