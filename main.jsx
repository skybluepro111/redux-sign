import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App.jsx';
import login from './reducers/login';

import { Parse } from 'parse';

Parse.initialize('a51cf9b34736ac7aaf3b29a5581df4d8e1fb3d51f308bcf0', '00ed6b5dcbf9b513ce76ad36a05d4e5ff33724daf0623b13');
Parse.serverURL = 'https://holor.wemersive.com/parse'

// const finalCreateStore = compose(
//   // Provides support for DevTools:
//   devTools(),
//   // Lets you write ?debug_session=<name> in address bar to persist debug sessions
//   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
// )(createStore);
// const store = finalCreateStore(login);
let store = createStore(login);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        
    </div>, 
    document.getElementById('app')
);
