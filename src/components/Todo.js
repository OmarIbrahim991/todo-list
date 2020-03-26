import React from 'react'
import { connect } from 'react-redux'
import {removeTodo, toggleCheck} from '../redux/actions'
import '../styles/Todo.css'

const fade = (element, props) => {
    element.parentElement.classList.add("fade")
    setTimeout(() => props.remove(props.id), 1000)
}

const Todo = props => (
    <li className="todo-container">
        <label className="todo-item">
            <input
            name="todo-check-input"
            onChange={() => props.toggleCheck(props.id)}
            type="checkbox"
            className="todo-check"
            checked={props.checked ? true : false}
        />
            <span className={props.checked ? "todo-text checked" : "todo-text"}>{props.text}</span>
            <i className="fas fa-times todo-button" onClick={event => fade(event.currentTarget.parentElement, props)}></i>
        </label>
    </li>
)
const mapStateToProps = state => ({
    remove: state.remove,
    toggleCheck: state.toggleCheck
})

const mapDispatchToProps = dispatch => ({
    remove: id => dispatch(removeTodo(id)),
    toggleCheck: id => dispatch(toggleCheck(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)