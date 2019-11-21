import React, {Component} from 'react'
import Todos from "./Todos";
import AddTodo from "./addTodo";
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/todoActions'
import { addTodo } from '../actions/todoActions'

class Todo extends Component {
    // deleteTodo = (id) => {
    //     const todos = this.state.todos.filter(todo => {
    //         return todo.id !== id;
    //     });
    //     this.setState({todos});
    // }
    //
    addTodo = (todo) => {
        todo.id = Math.random();
        this.props.addTodo(todo);
        // let todos = [...this.state.todos, todo];
        // this.setState({todos});
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo`s</h1>
                <Todos todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
                <AddTodo addTodo={this.addTodo}/>


            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}
const dispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        addTodo: (todo)=> {
            dispatch(addTodo(todo));
        }
    }
}
export default connect(mapStateToProps,dispatchToProps)(Todo)