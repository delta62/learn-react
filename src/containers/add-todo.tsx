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
            <div className="pb-2 mb-0">
                <form onSubmit={this.saveTodo}>
                    <div className="input-group py-1 rounded">
                        <div className="input-group-prepend">
                            <span className="input-group-text rounded-0 border-0 pr-1">+</span>
                        </div>
                        <input type="text"
                            className="form-control rounded-0 border-0"
                            placeholder="Add a to-do..."
                            value={this.state.value}
                            onChange={e => this.setState({ value: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo)
