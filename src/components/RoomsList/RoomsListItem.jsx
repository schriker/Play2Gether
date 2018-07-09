import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import RoomPlayersNumber from './RoomPlayersNumber';
import RoomHeader from './RoomHeader';
import RoomOptions from './RoomOptions';
import RoomTags from './RoomTags';
import FavButton from '../UI/FavButton';
import Button from '../UI/Button';

class RoomsListItem extends Component {

    favRoom(fav) {
        const favRooms = [...this.props.userFav];

        if(!fav) {
            favRooms.push(this.props.id);
            this.props.favRoom({type: "favRooms", array: favRooms,  uid: this.props.uid});
        }
        else {
            const removedfavRooms = favRooms.filter((item) => item !==  this.props.id);
            this.props.favRoom({type: "favRooms", array: removedfavRooms,  uid: this.props.uid});
        }
    }

    render() {

        let isFaved = false;

        if (this.props.userFav) {
            isFaved = this.props.userFav.includes(this.props.id);
        }

        return (
            <div className="single-room">
                <div className="single-room__info">
                    <RoomPlayersNumber players={this.props.players} maxPlayers={4} />
                    <RoomHeader name={this.props.name} desc={this.props.desc} />
                    <RoomTags tags={this.props.tags} />
                    <div className="single-room__join pull-right">
                        <FavButton isFaved={isFaved} favList={(fav) => this.favRoom(fav)} />
                        <Button value="Join" clicked={() => console.log("Join room")} type="grey" />
                    </div>
                </div>
                <RoomOptions voiceChat={this.props.voiceChat} platform={this.props.platform} region={this.props.region} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        favRoom: (props) => dispatch(action.addToFav(props))
    }
}

export default connect(null, mapDispatchToProps)(RoomsListItem);