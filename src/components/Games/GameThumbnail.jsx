import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../img/placeholder.jpg';
import Loader from '../UI/Loader';

class GameThumbnail extends Component {

    state = {
        imgLoaded: false 
    }

    imgLoaded = () => {
        this.setState({imgLoaded: true});
    }

    render() {

        const loader = this.state.imgLoaded ? null : <Loader type="grey-bg" />;

        return (
            <Link to={`/game/${this.props.id}`} className="loader-container">
                {loader}
                <img width={this.props.width} className="fluid-img" src={placeholder} alt="Placeholder" />
                <img 
                    width={this.props.width}
                    onLoad={() => this.imgLoaded()} 
                    className={this.state.imgLoaded ? "fluid-img game__thumbnail" : "fluid-img game__thumbnail game__thumbnail--hide"} 
                    src={this.props.src} alt={this.props.name} 
                />
            </Link>
        );
    }
}

export default GameThumbnail;