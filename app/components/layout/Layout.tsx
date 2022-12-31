import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = () => {
	return (
		<>
			<div className={styles.layout}>
				<main>
					<Header />
					{/* <section className={styles.content}>{children}</section> */}
				</main>
			</div>
		</>
	)
}

export default Layout
