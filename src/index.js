import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();