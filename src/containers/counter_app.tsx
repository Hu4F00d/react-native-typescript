/// <reference path="../../typings/tsd.d.ts"/>

import React, { Component, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Counter from '../components/counter';
import Control from '../components/control';
import * as counterActions from '../actions/counterActions';

import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';

class CounterApp extends Component<any, any> {
	render() {
		const { state, actions } = this.props;
		return (
			<View style={styles.container}>
				<Counter counter={state.count} />
				<Control {...actions} />
				<TouchableOpacity onPress={() => this.props.navigator.push({name: 'config'})}>
					<Text>Configs</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default connect(state => ({ 
		state: state.counter
	}),
	(dispatch) => ({
		actions: bindActionCreators(counterActions, dispatch)
	})
	)(CounterApp);