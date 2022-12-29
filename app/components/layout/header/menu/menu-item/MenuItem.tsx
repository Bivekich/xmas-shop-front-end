import Link from 'next/link'
import { FC } from 'react'
import { IMenuLink } from './menu-item.interface'

interface IMenuitem {
	item: IMenuLink
}

const MenuItem: FC<IMenuitem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	)
}

export default MenuItem
