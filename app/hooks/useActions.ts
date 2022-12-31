import { cartSlice } from '@/../app/store/slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const rootActions = {
	...cartSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootActions, dispatch)
}
