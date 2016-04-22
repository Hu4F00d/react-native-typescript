/// <reference path="../../typings/tsd.d.ts"/>

import React, { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Control = ({ increment, decrement, reset }) => {
		return (
			<View>
				<TouchableOpacity onPress={increment}>
					<Text style={styles.text}>Up</Text>
				</TouchableOpacity>	
				<TouchableOpacity onPress={decrement}>
					<Text style={styles.text}>Down</Text>
				</TouchableOpacity>	
				<TouchableOpacity onPress={reset}>
					<Text style={styles.text}>Reset</Text>
				</TouchableOpacity>	
			</View>
		);
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center'
	}
});

export default Control;