import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import '../styles/List.css'

const List = props => (
    <React.Fragment>
        <header id="app-header">
            <p className="header-text">Total: {props.todos.filter(todo => todo.deleted===false).length}</p>
            <p className="header-text">Checked: {props.todos.filter(todo => todo.deleted===false&&todo.checked).length}</p>
            <p className="header-text">Unchecked: {props.todos.filter(todo => todo.deleted===false&&!todo.checked).length}</p>
        </header>
        <div id="todo-list">
            <ul>
                {props.todos.map(todo => todo.deleted ? null : (<Todo key={todo.id} {...todo} />))}
            </ul>
        </div>
    </React.Fragment>
)

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(List)