/// <reference path="../../typings/tsd.d.ts"/>

import React, { View, Text } from 'react-native';

const Counter = ({ counter }) => {
	return (
		<View>
			<Text>
				{counter}
			</Text>
		</View>
	);
}

export default Counter;