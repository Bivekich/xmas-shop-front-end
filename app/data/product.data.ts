import { IProduct } from '../types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		description:
			'Calories total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
		name: 'Midnight MintMocha Frappuccino',
		images: [
			'/products/mocha-cookie.png',
			'/products/peppermint.png',
			'/products/sugar-cookie.png'
		],
		price: 9,
		reviews: []
	},
	{
		id: 2,
		description:
			'Calories total Fat 20g Saturated Fat 13g Trans Fat 0.5g 29% 63455%',
		name: 'Peppermint Hot Chocolate',
		images: ['/products/peppermint.png'],
		price: 7,
		reviews: []
	},
	{
		id: 3,
		description:
			'Calories total Fat 20g Saturated Fat 13g Trans Fat 0.5g 29% 63455%',
		name: 'Pineapple Passionfruit Lemonade Starbucks',
		images: ['/products/ice-coffee.png'],
		price: 8,
		reviews: []
	},
	{
		id: 4,
		description:
			'Calories total Fat 20g Saturated Fat 13g Trans Fat 0.5g 29% 63455%',
		name: 'Pineapple Passionfruit Lemonade Starbucks',
		images: ['/products/lemonade.png'],
		price: 12,
		reviews: []
	},
	{
		id: 5,
		description:
			'Calories total Fat 20g Saturated Fat 13g Trans Fat 0.5g 29% 63455%',
		name: 'Peppermint Hot Chocolate',
		images: ['/products/hot-chocolate.png'],
		price: 6,
		reviews: []
	}
]
