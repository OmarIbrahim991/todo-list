export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_CHECK = 'TOGGLE_CHECK'
let nextId = 1

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextId++,
    text,
    checked: false,
    deleted: false
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})

export const toggleCheck = id => ({
    type: TOGGLE_CHECK,
    id
})