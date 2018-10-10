import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC7EAWA5c9Df8-i62J1h_km7IHs3cR3Njk",
      authDomain: "manager-9c0a2.firebaseapp.com",
      databaseURL: "https://manager-9c0a2.firebaseio.com",
      projectId: "manager-9c0a2",
      storageBucket: "manager-9c0a2.appspot.com",
      messagingSenderId: "922449966293"
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  } 
}

export default App