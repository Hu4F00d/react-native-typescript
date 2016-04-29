
/// <reference path="../../typings/tsd.d.ts"/>

import React, { Component, View, Text, StyleSheet } from 'react-native';

export default class Config extends Component<any, any> {
	render() {
		return (
			<View style={styles.container}>
				<Text>I'm The Config Route</Text>
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