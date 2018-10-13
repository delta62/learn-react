import { Action, ActionType } from '../actions/action-types'
import { VisibilityFilter } from '../actions'

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action: Action) => {
    switch (action.type) {
        case ActionType.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter
