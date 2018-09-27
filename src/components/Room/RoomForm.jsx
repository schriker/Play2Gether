import React from 'react';
import {connect} from 'react-redux';
import ErrorsList from '../UI/ErrorsList';
import * as Yup from 'yup';
import * as action from '../../store/actions/index';
import { withFormik, Form, Field } from 'formik';
import Submit from '../UI/Submit';

const RoomForm = (props) => {

    let showErr = false;
    const errorsArray = [];

    if (Object.keys(props.errors).length > 0)  {
        showErr = true;
        for (let key in props.errors) {
            errorsArray.push(props.errors[key]);
        }
    }

    return (
        <Form>
            <ErrorsList errors={errorsArray} showErr={showErr} />
            <div className="room__row">
                <Field type="text" name="msg" placeholder="Your meassage" /><Submit isSending={props.isSending} value="Submit" />
            </div>
        </Form>
    );
};

const formikOptions = {
    mapPropsToValues: () => {
        return {
            msg: ""
        }
    },
    validationSchema: () => Yup.object().shape({
        msg: Yup.string().required("Please type something!")
    }),
    handleSubmit: (values, api) => {
        api.props.sendMessage(values, api.props.gameId, api.props.roomId);
        api.resetForm();
    },
    validateOnBlur: false,
    validateOnChange: false
}

const mapStateToProps = (state) => {
    return {
        isSending: state.chat.sending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (data, gameId, roomId) => dispatch(action.sendMessage(data, gameId, roomId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik(formikOptions)(RoomForm));