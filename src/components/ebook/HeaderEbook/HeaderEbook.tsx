import Image from 'next/image';
import Logo from '@/components/common/Logo';

import styles from './HeaderEbook.module.scss';
import Container from '../../common/Container';

function HeaderEbook() {
	return (
		<header className={styles.header}>
			<Logo variant='secondary' className={styles.logo} />
			<Container className={styles.content}>
				<Image
					className={styles.book}
					src='/ebook-cover.png'
					alt='9 Things You Must Know About Buying Your First Home'
					width={540}
					height={752}
				/>
				<div className={styles.info}>
					<h1 className={styles.title}>
						9 Things You Must Know About Buying Your First Home
					</h1>
					<div className={styles.meta}>
						<p className={styles.author}>Scott Johnson</p>
						<div className={styles.actions}>
							<a href='/ebook.pdf' className={styles.action}>PDF</a>
							<a href='/ebook.epub' className={styles.action}>ePUB</a>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default HeaderEbook;
