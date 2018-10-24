import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Link from '../components/link'
import { resetTodos } from '../actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClick: () => dispatch(resetTodos())
})

export default connect(undefined, mapDispatchToProps)(Link)
