import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../UI/SearchBar';
import Button from '../UI/Button';
import Filter from '../UI/Filter';
import GameItem from './GameItem';
import * as actions from '../../store/actions/games';

class GamesList extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div className="main-white">
                <div className="search">
                    <Button type="grey" value="Add game" clicked={() => console.log("Add game")} />
                    <SearchBar/>
                </div>
                <Filter />
                <div className="games-list">
                    <GameItem />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(actions.fetchGames())
    }
}

export default connect(null, mapDispatchToProps)(GamesList);