import Container from '@/components/Container';

import HeaderContent from './HeaderContent';
import HeaderMedia from './HeaderMedia';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<HeaderMedia />
			<Container className={styles.content}>
				<HeaderContent />
			</Container>
		</header>
	);
}

export default Header;
