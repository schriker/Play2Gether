import React, { Component } from 'react';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GameThumbnail from './GameThumbnail';
import FavButton from '../UI/FavButton';

class GameItem extends Component {
    
    componentDidMount() {
        if (!this.props.thumbnails[this.props.id]) {
            this.props.fetchThumbnail(this.props.id, this.props.thumbnail)
        }
    }

    favGame(fav) {
        const favGames = [...this.props.userFav];

        if(!fav) {
            favGames.push(this.props.id);
            this.props.favGame(favGames, this.props.uid);
        }
        else {
            const removedFavGames = favGames.filter((item) => item !==  this.props.id);
            this.props.favGame(removedFavGames, this.props.uid);
        }
    }
    
    render() {

        let isFaved = false;

        if (this.props.userFav) {
            isFaved = this.props.userFav.includes(this.props.id);
        }

        return (
            <div className="game">
                <GameThumbnail id={this.props.id} src={this.props.thumbnails[this.props.id]} name={this.props.name} />
                <div className="game__info">
                    <div className="game__title">
                        <Link to={`/game/${this.props.id}`}><p>{this.props.name}</p></Link>
                        {this.props.players} Players
                    </div>
                    <FavButton isFaved={isFaved} favList={(fav) => this.favGame(fav)} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        thumbnails: state.games.thumbnails,
        uid: state.auth.user.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThumbnail: (id, thumbnail) => dispatch(action.fetchThumbnails(id, thumbnail)),
        favGame: (id, uid) => dispatch(action.favGame(id, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameItem);