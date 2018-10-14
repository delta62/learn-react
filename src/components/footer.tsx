import React from 'react'
import FilterLink from '../containers/filter-link'
import { VisibilityFilter } from '../actions'
import ResetLink from '../containers/reset-link';

const Footer = () => (
    <div className="row mt-3">
        <div className="col-auto text-left"><ResetLink /></div>
        <div className="col text-right">
            <span>Show: </span>
            <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    </div>
)

export default Footer
