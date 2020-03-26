import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO, TOGGLE_CHECK } from './actions'

const todos = (state=[], action) => {
    let output
    switch (action.type) {
        case ADD_TODO:
            output = [...state, {id: action.id, text: action.text, completed: false, deleted: false}]
            localStorage.setItem('todos', JSON.stringify(output))
            return output            
        case REMOVE_TODO:
            output = [...state.map(item => item.id===action.id ? Object.assign({}, item, {deleted: true}) : Object.assign({}, item))]
            localStorage.setItem('todos', JSON.stringify(output))
            return output
        case TOGGLE_CHECK:
            output = [...state.map(item => item.id===action.id ? Object.assign({}, item, {checked: !item.checked}) : Object.assign({}, item))]
            localStorage.setItem('todos', JSON.stringify(output))
            return output
        default:
            return state
    }
}

export default combineReducers({
    todos,
})