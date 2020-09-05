import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import TableOfContents from './TableOfContents';
import Router from './Router';

class App extends Component {
	componentWillMount() {
	  const config = {
	    apiKey: "AIzaSyDy4rzv0kQWOanG6GSCbLn7VdT5nrcgGs0",
    authDomain: "manager-bda67.firebaseapp.com",
    databaseURL: "https://manager-bda67.firebaseio.com",
    projectId: "manager-bda67",
    storageBucket: "manager-bda67.appspot.com",
    messagingSenderId: "951254599554",
    appId: "1:951254599554:web:7b72b379c17c020333b19b",
    measurementId: "G-FG9JKHR24Z"
	  };
	  firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
