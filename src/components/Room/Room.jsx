import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Loader from '../UI/Loader';
import RoomsHeader from '../RoomsList/RoomsHeader';
import RoomTags from '../RoomsList/RoomTags';
import RoomOptions from '../RoomsList/RoomOptions';
import RoomChat from '../Room/RoomChat';

class Room extends Component {

    constructor(props) {
        super(props);
        this.gameId = this.props.match.params.id;
        this.roomId = this.props.match.params.roomId;
    }

    componentDidMount() {
        this.props.fetchRooms(this.gameId);
        this.props.fethcMessage(this.gameId, this.roomId);
    }

    componentWillUnmount() {
        this.props.clearChat();
    }

    favRoom(fav) {
        const favRooms = [...this.props.userData.favRooms];

        if(!fav) {
            favRooms.push(this.roomId);
            this.props.favRoom({type: "favRooms", array: favRooms,  uid: this.props.uid});
        }
        else {
            const removedfavRooms = favRooms.filter((item) => item !==  this.roomId);
            this.props.favRoom({type: "favRooms", array: removedfavRooms,  uid: this.props.uid});
        }
    }

    render() {

        let isFaved = false;
        let filterRooms = [];
        let singleRoom = {}
        let contentHeader = <Loader type="white-bg" />;
        let roomInfo = null;

        if (this.props.userData.favRooms) {
            isFaved = this.props.userData.favRooms.includes(this.roomId);
        }


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
                                isFaved={isFaved} 
                                favList={(fav) => this.favRoom(fav)}
                            />
            roomInfo = <div className="rooms">
                            <div className="single-room__info">
                            <RoomTags tags={singleRoom.tags} />
                                <div className="single-room__name">
                                    {singleRoom.desc}
                                </div>
                            </div>
                            <RoomOptions voiceChat={singleRoom.voice} platform={singleRoom.platform} region={singleRoom.region} />
                        </div>
        }

        return (
            <Fragment>
                {contentHeader}
                <div className="main-white main-white--with-header">
                    {roomInfo}
                    <RoomChat uid={this.props.uid} gameId={this.gameId} roomId={this.roomId} messages={this.props.chat.messages} />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thumbnail: state.games.thumbnails,
        rooms: state.rooms.rooms,
        userData: state.userData.userData,
        uid: state.auth.user.uid,
        chat: state.chat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (gameId) => dispatch(actions.fetchRooms(gameId)),
        fethcMessage: (gameId, roomId) => dispatch(actions.fethcMessage(gameId, roomId)),
        favRoom: (props) => dispatch(actions.addToFav(props)),
        clearChat: () => dispatch(actions.clearChat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);