import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'

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
