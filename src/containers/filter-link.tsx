import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilter } from '../actions'
import { AppState } from '../models'
import Link from '../components/link'

export interface FilterLinkProps {
    filter: VisibilityFilter
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
