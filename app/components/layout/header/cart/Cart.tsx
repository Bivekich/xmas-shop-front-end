import { useTypedSelector } from '@/../app/hooks/useTypedSelector'
import { ICartItem } from '@/../app/types/cart.interface'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC<{ item: ICartItem }> = item => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector(state => state.cart.items)

	// TODO: Add redux
	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>MY BASKET</span>
			</button>

			{isOpen && (
				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={() => setIsOpen(!isOpen)}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>My basket</DrawerHeader>

						<DrawerBody>
							<div className={styles.cart}>
								{cart.map(item => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
						</DrawerBody>

						<DrawerFooter
							justifyContent='space-between'
							borderTopColor={'#A4A59B'}
							borderTopWidth={1}
						>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>$100</div>
							</div>
							<Button colorScheme='green'>Checkout</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			)}
		</div>
	)
}

export default Cart
