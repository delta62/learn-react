import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/app'
import { fetchTodos } from './actions';

let store = createStore(rootReducer)

// First thing we do is update our state with our existing todos
store.dispatch(fetchTodos());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
