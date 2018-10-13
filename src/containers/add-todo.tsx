import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }: { dispatch: Dispatch }) => {
    let input: HTMLInputElement

    return (
        <div className="pb-2 mb-0">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >

                <div className="input-group py-1 rounded">
                    <div className="input-group-prepend">
                        <span className="input-group-text rounded-0 border-0 pr-1">+</span>
                    </div>
                    <input type="text"
                        className="form-control rounded-0 border-0"
                        placeholder="Add a to-do..."
                        ref={node => input = node!} />
                </div>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
