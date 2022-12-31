import { cart } from '@/../app/data/cart.data'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IAddToCartPayload, IInitialState } from './types'

const initialState: IInitialState = {
	items: cart
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const id = state.items.length
			state.items.push({ ...action.payload, id })
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		}
	}
})
// TODO: Change qty
