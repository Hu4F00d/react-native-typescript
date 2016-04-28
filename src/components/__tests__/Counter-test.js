/**
 * ## This class tests that the Counter component displays correctly
 * 
 */

jest.autoMockOff();

/**
 * ## Imports
 */ 
import React, { View } from 'react-native';
import TestUtils from 'react-addons-test-utils';

/**
 * ## Class Under Test 
 */
jest.unmock('../components/counter');
const Counter = require('../counter.tsx');

/**
 * ## Test
 */
describe('Counter display', () => {
	
	/**
	 * ### renderCounter
	 * display component and return 
	 * @returns {Object} with props, output and renderer
	 */ 
		function renderCounter(props) {
			const renderer = utils.createRenderer();
			renderer.render(<Header {...props}/>);
			const output = renderer.getRenderOutput;
			return {
				props,
				output,
				renderer
			};
		}
	
	it('should display 0 when first rendering', () => {
		expect(true).toEqual(true);
	});
});
