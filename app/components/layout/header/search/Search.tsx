import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement children={<BsSearch color='grey' />} />
				<Input
					variant='flushed'
					type='email'
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder='Search'
					_focus={{
						boxShadow: 'none'
					}}
					_focusVisible={{
						borderColor: '#078C65'
					}}
				/>
			</InputGroup>
		</div>
	)
}

export default Search
