import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../UI/SearchBar';
import Button from '../UI/Button';
import Filter from '../Filter/Filter';
import GameItem from './GameItem';
import Loader from '../UI/Loader';
import * as actions from '../../store/actions/index';
import { filterByValue } from '../../utility/filterHelper';
import { ordderOptionsUpdater } from '../../utility/orderOptionsUpdate';

class GamesList extends Component {

    state = {
        orderOptions: [
            {
                value: "Name",
                option: null
            },
            {
                value: "Players",
                option: "DESC"
            }
        ]
    }

    componentDidMount() {
        this.props.fetchGames();
    }

    componentWillUnmount() { 
        const defaultOption = {
                value: "Players",
                option: "DESC"
        }
        this.props.orderGames(defaultOption);
        this.props.onSearch("");
    }

    onOrder = (id, orderMethod) => {
        const {updatedOption, updatedArr} = ordderOptionsUpdater(id, orderMethod, this.state.orderOptions);
        this.setState({orderOptions: updatedArr});
        this.props.orderGames(updatedOption);
    }

    onSearchChange = (e) => {
        this.props.onSearch(e.target.value);
    }

    render() {
        let content = <Loader type="white-bg" />;

        if(!this.props.isFetching) {
            content = this.props.games.map((game) => <GameItem userFav={this.props.userData.favGames} key={game.id} id={game.id} name={game.name} thumbnail={game.img} players={game.players} />);
        }

        return (
            <div className="main-white">
                <div className="search">
                    <Button type="grey" value="Add game" clicked={() => console.log("Add game")} />
                    <SearchBar value={this.props.searchValue} onSearch={(e) => this.onSearchChange(e)} />
                </div>
                <Filter clicked={(id, method) => this.onOrder(id, method)} options={this.state.orderOptions} />
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
        games: filterByValue(state.games.games, state.games.searchValue, state.games.orderOption),
        err: state.games.err,
        searchValue: state.games.searchValue,
        userData: state.userData.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(actions.fetchGames()),
        onSearch: (searchValue) => dispatch(actions.filterGames(searchValue)),
        orderGames: (orderOption) => dispatch(actions.orderGames(orderOption))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);