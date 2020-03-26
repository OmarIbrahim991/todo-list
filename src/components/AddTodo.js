import React from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleCheck } from '../redux/actions'
import '../styles/AddTodo.css'

const handleChange = value => {
    if (value) {
        document.querySelector('#add-button').classList.add('active')
        document.querySelector('#add-button').classList.remove('not-active')
    } else {
        document.querySelector('#add-button').classList.remove('active')
        document.querySelector('#add-button').classList.add('not-active')
    }
}

const AddTodo = ({dispatch}) => {
    let input
    const localTodos = localStorage.getItem('todos')
    const localArr = JSON.parse(localTodos)
    localTodos ? localArr.map(todo => dispatch(addTodo(todo.text))) : null
    localTodos ? localArr.map(todo => todo.deleted ? dispatch(removeTodo(todo.id)) : null) : null
    localTodos ? localArr.map(todo => todo.checked ? dispatch(toggleCheck(todo.id)) : null) : null

    return (
        <div id="add-todo">
            <input
                id="add-input"
                placeholder="Type here to add to your list."
                ref={node => (input = node)}
                onChange={event => handleChange(event.target.value)}
            />
            <button
                id="add-button"
                className="not-active"
                onClick={() => {
                    input ? input.value ? dispatch(addTodo(input.value)) : input.value = '' : input.value = ''
                    input.value = ''
                    handleChange(input.value)
                }}
            >
                ADD
            </button>
        </div>
    )
}

export default connect()(AddTodo)