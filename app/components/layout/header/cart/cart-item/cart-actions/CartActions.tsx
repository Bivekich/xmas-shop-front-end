import { useActions } from '@/../app/hooks/useActions'
import { useCart } from '@/../app/hooks/useCart'
import { ICartItem } from '@/../app/types/cart.interface'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartActions: FC<{ item: ICartItem }> = item => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.item.id)?.quantity

	return (
		<div>
			<HStack className='mt-3'>
				<Button
					{...dec}
					rounded='full'
					border='1px'
					onClick={() => changeQuantity({ id: item.item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<AiOutlineMinus fontSize={13} />
				</Button>
				<Input
					{...input}
					readOnly
					focusBorderColor='green.400'
					_hover={{ cursor: 'default' }}
					// value={}
				/>
				<Button
					{...inc}
					rounded='full'
					border='1px'
					onClick={() => changeQuantity({ id: item.item.id, type: 'plus' })}
				>
					<AiOutlinePlus fontSize={13} />
				</Button>
			</HStack>

			<Button
				variant='solid'
				color='#F23C3D'
				marginTop={2}
				size='sm'
				opacity={0.8}
				onClick={() => {
					removeFromCart({ id: item.item.id })
				}}
			>
				Remove
			</Button>
		</div>
	)
}

export default CartActions
