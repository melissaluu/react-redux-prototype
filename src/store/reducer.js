import { combineReducers } from 'redux';

export const reducer =  (state = { result: '#ffffff' }, action) => {
    switch (action.type) {
        case 'UPDATE_COLOR':
        console.log(action)
            return {
                result: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    reducer
});