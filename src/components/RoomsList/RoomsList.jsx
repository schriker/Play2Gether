import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Loader from '../UI/Loader';
import RoomsHeader from './RoomsHeader';
import RoomsListItem from './RoomsListItem';

class RoomsList extends Component {
    
    componentDidMount() {
        this.props.fetchRooms(this.props.match.params.id);
    }

    render() {

        let game = this.props.rooms.rooms[this.props.match.params.id];

        console.log(game);

        let contentHeader = <Loader type="white-bg" />;
        let roomsList = <Loader type="white-bg" />;

        if (game) {
            contentHeader = <RoomsHeader 
                                id={this.props.match.params.id} 
                                name={game.data.name} 
                                src={this.props.thumbnails[this.props.match.params.id]} 
                                players={game.data.players} 
                                rooms={game.rooms.length}   
                            />;

            roomsList = game.rooms.map((room) => {
                return <RoomsListItem 
                            key={room.id}
                            id={room.id}
                            name={room.name}
                            players={room.players}
                            desc={room.desc}
                            region={room.region}
                            voiceChat={room.voiceChat}
                            tags={room.tags}
                            platform={room.platform}
                        />;
            });
        }

        return (
            <Fragment>
                {contentHeader}
                <div className="rooms">
                    {roomsList}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thumbnails: state.games.thumbnails,
        rooms: state.rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (gameId) => dispatch(actions.fetchRooms(gameId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);