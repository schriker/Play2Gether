import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/rooms';
import Modal from '../UI/Modal';
import ErrorsList from '../UI/ErrorsList';
import * as Yup from 'yup';
import Submit from '../UI/Submit';
import RoomTags from './RoomTags';
import { withFormik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { splitTags } from '../../utility/splitTags';


class AddRoom extends Component {

    state = {
        tags: []
    }

    addTagsHandler = (props, blur = false) => {
        if(props.keyCode === 32 || blur) {
            const tags = splitTags(props.target.value);
            this.setState({tags: tags})
        }
    }

    render() {

        let showErr = false;
        const errorsArray = [];
    
        if (Object.keys(this.props.errors).length > 0)  {
            showErr = true;
            for (let key in this.props.errors) {
                errorsArray.push(this.props.errors[key]);
            }
        }
    
        if (this.props.addingErr)  {
            showErr = true;
            errorsArray.push(this.props.addingErr);
        }
    
        return (
            <CSSTransition in={this.props.show} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
                <Modal title="New room" close={this.props.close}>
                    {this.props.addingSuccess ? <Redirect to={`/game/${this.props.id}/room/${this.props.addedRoomId}`} /> : null}
                    <Form className="form">
                        <ErrorsList errors={errorsArray} showErr={showErr} />
                        <Field type="text" name="name" placeholder="Room name" />
                        <Field type="text" name="desc" placeholder="Short description" />
                        <Field type="number" name="maxPlayers" placeholder="Number of players" />
                        <div className="with-label">
                                <label htmlFor="tags">Add with spacebar.</label>
                                <Field onBlur={(props, blur = true) => this.addTagsHandler(props, blur = true)} onKeyUp={(props) => this.addTagsHandler(props)} placeholder="Tags" type="text" name="tags" id="tags" />
                            </div>
                            <div className="single-room__tags form__tags">
                                <RoomTags tags={this.state.tags} />
                            </div>
                            <div className="form__row">
                                <Field type="checkbox" name="voice" id="voice" />
                                <label htmlFor="voice">Voice chat required?</label>
                            </div>
                            <div className="form__row">
                                <p>Platform</p>
                                {
                                    this.props.settings.platforms.map((platform) => {
                                        return (
                                            <Fragment key={platform}>
                                                <Field type="radio" value={platform} name="platform" id={platform} />
                                                <label htmlFor={platform}>{platform}</label>
                                            </Fragment>
                                        )
                                    }
                                )}
                            </div>
                            <div className="form__row">
                                <p>Region</p>
                                <Field type="radio" value="EU" name="region" id="eu" />
                                <label htmlFor="eu">EU</label>
                                <Field type="radio" value="NA" name="region" id="na" />
                                <label htmlFor="na">NA</label>
                                <Field type="radio" value="AS" name="region" id="as" />
                                <label htmlFor="as">AS</label>
                            </div>
                            <div className="login-box__row">
                            <Submit isSending={this.props.isAdding} value="Submit" />
                            </div>
                    </Form>
                </Modal>
            </CSSTransition>
        );
    }
}

const formikOptions = {
    mapPropsToValues: () => {
        return {
            name: "",
            desc: "",
            maxPlayers: "",
            players: 1,
            tags: "",
            voice: false,
            platform: "",
            region: ""
        }
    },
    validationSchema: (props) => 
        Yup.object().shape({
            // eslint-disable-next-line
            name: Yup.string().min(3, "Name min. ${min} characters long!").max(30, "Name max. ${max} characters long!").required("Name is required!"),
            // eslint-disable-next-line
            desc: Yup.string().min(5, "Desc. min. ${min} characters long!").max(30, "Desc. max. ${max} characters long!").required("Description is required!"),
            // eslint-disable-next-line
            maxPlayers: Yup.number().min(props.settings.minPlayers, "At least ${min} players!").max(props.settings.maxPlayers, "Max. ${max} players!").required("Players number is required!"),
            // eslint-disable-next-line
            tags: Yup.string().max(30, "Tags. max. ${max} characters long!").required("Tags are required!"),
            platform: Yup.string().required("Select platform!"),
            region: Yup.string().required("Select region!")
        }),
    handleSubmit: (values, api) => {
        const tags = splitTags(values.tags);
        const data = {
            ...values,
            tags: [
                ...tags
            ]
        };
        api.props.addRoom(data, api.props.id);
    },
    validateOnBlur: false,
    validateOnChange: false
}

const mapStateToProps = (state) => {
    return {
        isAdding: state.rooms.isAddingRoom,
        addingErr: state.rooms.err,
        addingSuccess: state.rooms.roomAdded,
        addedRoomId: state.rooms.addedRoomId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRoom:(data, gameId) => dispatch(action.addRoom(data, gameId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withFormik(formikOptions)(AddRoom));