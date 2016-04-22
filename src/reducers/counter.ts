/// <reference path="../../typings/tsd.d.ts"/>

const initialState = {
	count: 0
}

interface counterState {
    count: number
}
 
export default function counter(state = initialState, action = {}) : counterState {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			};	
		case 'RESET':
			return {
				...state,
				count: 0
			};	
		default:
			return state;	
	}
}