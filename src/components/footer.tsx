import React from 'react'
import FilterLink from '../containers/filter-link'
import ResetLink from '../containers/reset-link';
import { VisibilityFilter } from '../actions'
import { clearAll } from '../api/todo-api';
import Link from './link';

const Footer = () => (
    <footer>
        <div className="left"><ResetLink>Reset</ResetLink></div>
        <div className="right">
            <span>Show: </span>
            <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    </footer>
)

export default Footer
