import Container from '@/components/Container';

import HeaderContent from './HeaderContent';
import HeaderVideo from './HeaderVideo';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<HeaderVideo />
			<Container className={styles.content}>
				<HeaderContent />
			</Container>
		</header>
	);
}

export default Header;
