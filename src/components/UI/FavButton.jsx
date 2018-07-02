import React, { Component } from 'react';

class FavButton extends Component {

    state = {
        clicked: false
    }

    onClick = () => {
        this.setState({clicked: true});
        setTimeout(() => {
            this.props.favList(this.props.isFaved);
            this.setState({clicked: false});
        }, 500);
    }

    render() {

        let classesArr = ["game__fav"];

        if (this.props.isFaved) {
            classesArr.push("game__fav--faved");
        }

        if (this.state.clicked) {
            classesArr.push("game__fav--clicked")
        }

        const classes = classesArr.join([' ']);

        return (
            <div onClick={() => this.onClick()} className={classes}></div>
        );
    }
}

export default FavButton;