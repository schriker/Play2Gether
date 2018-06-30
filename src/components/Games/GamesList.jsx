import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../UI/SearchBar';
import Button from '../UI/Button';
import Filter from '../UI/Filter';
import GameItem from './GameItem';
import Loader from '../UI/Loader';
import * as actions from '../../store/actions/games';
import { filterByValue } from '../../utility/filterHelper';

class GamesList extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    onSearchChange = (e) => {
        this.props.onSearch(e.target.value);
    }

    render() {

        let content = <Loader type="white-bg" />;

        if(!this.props.isFetching) {
            content = this.props.games.map((game) => <GameItem key={game.id} id={game.id} name={game.name} thumbnail={game.img} players={game.players} />);
        }

        return (
            <div className="main-white">
                <div className="search">
                    <Button type="grey" value="Add game" clicked={() => console.log("Add game")} />
                    <SearchBar value={this.props.searchValue} onSearch={(e) => this.onSearchChange(e)} />
                </div>
                <Filter />
                <div className="games-list loader-container">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.games.isFetching,
        games: filterByValue(state.games.games, state.games.searchValue),
        err: state.games.err,
        searchValue: state.games.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(actions.fetchGames()),
        onSearch: (searchValue) => dispatch(actions.filterGames(searchValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);