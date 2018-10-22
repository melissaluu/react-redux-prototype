import { combineReducers } from 'redux';

export const styles = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_COLOR':
        console.log(action)
            return {
                fontColor: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    styles
});