import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Loader from '../UI/Loader';
import RoomsHeader from '../RoomsList/RoomsHeader';

class Room extends Component {

    constructor(props) {
        super(props);
        this.gameId = this.props.match.params.id;
        this.roomId = this.props.match.params.roomId;
    }

    componentDidMount() {
        this.props.fetchRooms(this.gameId);
    }

    render() {

        let filterRooms = [];
        let singleRoom = {}
        let contentHeader = <Loader type="white-bg" />;

        if(this.props.rooms[this.gameId]) {

            filterRooms = this.props.rooms[this.gameId].rooms.filter(room => room.id === this.roomId);

            singleRoom = {
                ...filterRooms[0]
            };

            contentHeader = <RoomsHeader 
                                id={this.gameId}
                                name={singleRoom.name}
                                src={this.props.thumbnail[this.gameId]}
                                maxPlayers={singleRoom.maxPlayers}
                                players={singleRoom.players}
                            />
        }

        return (
            <Fragment>
                {contentHeader}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thumbnail: state.games.thumbnails,
        rooms: state.rooms.rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (gameId) => dispatch(actions.fetchRooms(gameId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);