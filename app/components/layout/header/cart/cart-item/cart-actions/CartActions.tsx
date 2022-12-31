import { ICartItem } from '@/../app/types/cart.interface'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { useActions } from '../../../../../../hooks/useActions'

const CartActions: FC<{ item: ICartItem }> = item => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart } = useActions()

	return (
		<div>
			<HStack className='mt-3'>
				<Button {...dec} rounded='full' border='1px'>
					<AiOutlineMinus fontSize={13} />
				</Button>
				<Input
					{...input}
					readOnly
					focusBorderColor='green.400'
					_hover={{ cursor: 'default' }}
				/>
				<Button {...inc} rounded='full' border='1px'>
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
