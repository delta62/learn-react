import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Link from '../components/link'
import { resetTodos } from '../actions';

const ResetLink = ({ dispatch }: { dispatch: Dispatch }) => (
    <Link active={false} onClick={() => dispatch(resetTodos())}>Reset</Link>
);

export default connect()(ResetLink);
