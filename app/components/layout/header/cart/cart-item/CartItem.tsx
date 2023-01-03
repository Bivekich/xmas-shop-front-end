import CartActions from '@/../app/components/layout/header/cart/cart-item/cart-actions/CartActions'
import { ICartItem } from '@/../app/types/cart.interface'
import { formatToCurrency } from '@/../app/utils/format-to-currency'
import Image from 'next/image'
import { FC } from 'react'

import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>
					{formatToCurrency(item.product.price)}
				</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
