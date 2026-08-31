import Image from 'next/image';
import Logo from '../Logo';
import styles from './HeaderBlog.module.scss';
import Container from '../Container';

function HeaderBlog() {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} />
			<Container>
				<Image
					className={styles.person}
					src='/blog-header-person.png'
					alt='Mortgage advisor'
					width={816}
					height={451}
				/>
			</Container>
		</header>
	);
}

export default HeaderBlog;
