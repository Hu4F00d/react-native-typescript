/// <reference path="../../typings/tsd.d.ts"/>

import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers/index';
import CounterApp from './counter_app';


const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component<any, any> {
	render() {
		return (
			<Provider store={store}>
				<CounterApp />
			</Provider>	
		);
	}
}