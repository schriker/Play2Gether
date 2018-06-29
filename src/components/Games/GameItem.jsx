import React, { Component } from 'react';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';

class GameItem extends Component {

    componentDidMount() {
        this.props.fetchThumbnail(this.props.id, this.props.thumbnail)
    }
    

    render() {
        return (
            <div className="game">
                <a href={`/games/${this.props.id}`}>
                    <img className="fluid-img" src={this.props.thumbnails[this.props.id]} alt={this.props.name} />
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