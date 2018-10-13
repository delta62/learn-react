import { Action } from 'redux'
import { VisibilityFilter } from '../actions'

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action: Action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return (action as any).filter
        default:
            return state
    }
}

export default visibilityFilter
