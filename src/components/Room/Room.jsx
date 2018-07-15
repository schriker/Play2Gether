import React, { Component } from 'react';

class Room extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
                {this.props.match.params.roomId}
            </div>
        );
    }
}

export default Room;