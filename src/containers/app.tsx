/// <reference path="../../typings/tsd.d.ts"/>

import React, { 
  Component,
  Navigator
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers/index';
import CounterApp from './counter_app';
import Config from './config';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const ROUTES = {
	home: CounterApp,
	config: Config
}

export default class App extends Component<any, any> {
	renderScene(route, navigator) {
		const Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />;
    }
	render() {
		return (
			<Provider store={store}>
				<Navigator
					initialRoute = {{name: 'home'}}
					renderScene = {this.renderScene}
					configureScene = {() =>  {return Navigator.SceneConfigs.FloatFromRight}}
					/>
			</Provider>	
		);
	}
}