import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../UI/SearchBar';
import Button from '../UI/Button';
import Filter from '../UI/Filter';
import GameItem from './GameItem';
import Loader from '../UI/Loader';
import * as actions from '../../store/actions/games';

class GamesList extends Component {

    componentDidMount() {
        this.props.fetchGames();
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
                    <SearchBar/>
                </div>
                <Filter />
                <div className="games-list">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.games.isFetching,
        games: state.games.games,
        err: state.games.err
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(actions.fetchGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);