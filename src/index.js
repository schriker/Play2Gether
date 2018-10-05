import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import authReducer from './store/reducers/auth';
import gamesReducer from './store/reducers/games';
import roomsReducer from './store/reducers/rooms';
import chatReducer from './store/reducers/chat';
import userDataReducer from './store/reducers/userData';

const rootReducer = combineReducers({
    auth: authReducer,
    games: gamesReducer,
    rooms: roomsReducer,
    userData: userDataReducer,
    chat: chatReducer
});

let store = null;

if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) {
    const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

else {
    store = createStore(rootReducer, applyMiddleware(thunk));
}

const app = (
    <Provider store={store}>   
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();