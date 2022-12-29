import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FC, useState } from 'react'
import styles from './Search.module.scss'
import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					variant='outline'
					type='email'
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder='Search'
				/>
			</InputGroup>
		</div>
	)
}

export default Search
