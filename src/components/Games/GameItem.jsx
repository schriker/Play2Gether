import React, { Component } from 'react';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import placeholder from '../../img/placeholder.jpg';
import Loader from '../UI/Loader';

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
    

    render() {
        return (
            <div className="game">
                <a className="loader-container" href={`/games/${this.props.id}`}>
                    <Loader type="grey-bg" />
                    <img className="fluid-img" src={placeholder} alt="Placeholder" />
                    <img 
                        onLoad={() => this.imgLoaded()} 
                        className={this.state.imgLoaded ? "fluid-img game__thumbnail" : "fluid-img game__thumbnail game__thumbnail--hide"} 
                        src={this.props.thumbnails[this.props.id]} alt={this.props.name} />
                </a>
                <div className="game__info">
                    <div className="game__title">
                        <a href={`/games/${this.props.id}`}><p>{this.props.name}</p></a>
                        {this.props.players} Players
                    </div>
                    <div className="game__fav">
                        <i className="far fa-heart"></i>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        thumbnails: state.games.thumbnails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThumbnail: (id, thumbnail) => dispatch(action.fetchThumbnails(id, thumbnail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameItem);