import React, { Component, Fragment } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Loader from '../UI/Loader';
import RoomsHeader from './RoomsHeader';
import RoomsListItem from './RoomsListItem';
import Button from '../UI/Button';
import SearchBar from '../UI/SearchBar';
import Filter from '../Filter/Filter';
import { filterByValue } from '../../utility/filterHelper';
import { ordderOptionsUpdater } from '../../utility/orderOptionsUpdate';

class RoomsList extends Component {

    state = {
        orderOptions: [
            {
                value: "Name",
                option: null
            },
            {
                value: "Players",
                option: "ASC"
            }
        ]
    }

    onOrder = (id, orderMethod) => {
        const {updatedOption, updatedArr} = ordderOptionsUpdater(id, orderMethod, this.state.orderOptions);
        this.setState({orderOptions: updatedArr});
        this.props.orderRooms(updatedOption);
    }
    
    componentDidMount() {
        this.props.fetchRooms(this.props.match.params.id);
    }

    onSearchChange = (e) => {
        this.props.onSearch(e.target.value);
    }

    render() {

        let game = this.props.game.rooms[this.props.match.params.id];

        let contentHeader = <Loader type="white-bg" />;
        let roomsList = null;

        if (game) {
            contentHeader = <RoomsHeader 
                                id={this.props.match.params.id} 
                                name={game.data.name} 
                                src={this.props.thumbnails[this.props.match.params.id]} 
                                players={game.data.players} 
                                rooms={game.rooms.length}   
                            />;

            roomsList = this.props.rooms.map((room) => {
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
                            userFav={this.props.userData.favRooms}
                            uid={this.props.uid}
                        />;
            });
        }

        return (
            <Fragment>
                {contentHeader}
                <div className="main-white main-white--with-header">
                <div className="search">
                    <Button type="grey" value="Add room" clicked={() => console.log("Add room")} />
                    <SearchBar value={this.props.searchValue} onSearch={(e) => this.onSearchChange(e)} />
                </div>
                <Filter clicked={(id, method) => this.onOrder(id, method)} options={this.state.orderOptions} />
                    <div className="rooms">
                        {roomsList}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        thumbnails: state.games.thumbnails,
        game: state.rooms,
        rooms: state.rooms.rooms[props.match.params.id] ? filterByValue(state.rooms.rooms[props.match.params.id].rooms, state.rooms.searchValue, state.rooms.orderOption) : null,
        userData: state.userData.userData,
        uid: state.auth.user.uid,
        searchValue: state.rooms.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (gameId) => dispatch(actions.fetchRooms(gameId)),
        onSearch: (searchValue) => dispatch(actions.filterRooms(searchValue)),
        orderRooms: (orderOption) => dispatch(actions.orderRooms(orderOption))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);