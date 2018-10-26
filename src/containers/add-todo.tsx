import React, { Component, FormEvent } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions';

interface AddTodoProps {
    dispatch: Dispatch;
}

interface AddTodoState {
    value: string;
}

class AddTodo extends Component<AddTodoProps, AddTodoState> {
    constructor(props: AddTodoProps) {
        super(props);
        this.state = { value: '' };

        this.saveTodo = this.saveTodo.bind(this);
    }

    private saveTodo(e: FormEvent) {
        e.preventDefault();
        if (!this.state.value.trim()) return;

        this.props.dispatch(addTodo(this.state.value));

        // Clears input text box after todo is saved
        this.setState({ value: '' });
    }

    render() {
        return (
              <form className="add-todo" onSubmit={this.saveTodo}>
                  <span className="submit">+</span>
                  <input type="text"
                      placeholder="Add a to-do..."
                      value={this.state.value}
                      onChange={e => this.setState({ value: e.target.value })} />
              </form>
        );
    }
}

export default connect()(AddTodo)
