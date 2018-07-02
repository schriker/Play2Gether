import React, { Component } from 'react';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import placeholder from '../../img/placeholder.jpg';
import Loader from '../UI/Loader';
import FavButton from '../UI/FavButton';

class GameItem extends Component {

    state = {
        imgLoaded: false 
    }

    imgLoaded = () => {
        this.setState({imgLoaded: true});
    }

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
                <a className="loader-container" href={`/games/${this.props.id}`}>
                    <Loader type="grey-bg" />
                    <img className="fluid-img" src={placeholder} alt="Placeholder" />
                    <img 
                        onLoad={() => this.imgLoaded()} 
                        className={this.state.imgLoaded ? "fluid-img game__thumbnail" : "fluid-img game__thumbnail game__thumbnail--hide"} 
                        src={this.props.thumbnails[this.props.id]} alt={this.props.name} 
                    />
                </a>
                <div className="game__info">
                    <div className="game__title">
                        <a href={`/games/${this.props.id}`}><p>{this.props.name}</p></a>
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