import { useCart } from '@/../app/hooks/useCart'
import { formatToCurrency } from '@/../app/utils/format-to-currency'
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

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>{cart.length}</span>
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
								{cart.length ? (
									cart.map(item => <CartItem key={item.id} item={item} />)
								) : (
									<div>Basket is empty!</div>
								)}
							</div>
						</DrawerBody>

						<DrawerFooter
							justifyContent='space-between'
							borderTopColor={'#A4A59B'}
							borderTopWidth={1}
						>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>{formatToCurrency(total)}</div>
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
