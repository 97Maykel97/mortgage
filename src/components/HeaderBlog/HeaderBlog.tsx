import Image from 'next/image';
import Logo from '../Logo';
import VideoCard from '@/components/VideoCard';
import Resources from '@/components/Resources/Resources';
import Education from '@/components/Education/Education';
import styles from './HeaderBlog.module.scss';
import Container from '../Container';
import Footer from '../Footer';

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

				<section className={styles.videos}>
					<VideoCard title='What are points and credits?' duration='0:27' />
					<VideoCard
						title='Why a mortgage is so much more than just a rate?'
						duration='0:34'
					/>
					<VideoCard
						title='Why a mortgage is so much more than just a rate?'
						duration='0:34'
					/>
					<VideoCard title='What are points and credits?' duration='0:27' />
					<VideoCard
						title='Why a mortgage is so much more than just a rate?'
						duration='0:34'
					/>
					<VideoCard
						title='Why a mortgage is so much more than just a rate?'
						duration='0:34'
					/>
				</section>

				<div className={styles.resources}>
					<Resources direction='row' className={styles.blogResources} />
				</div>

				<div className={styles.education}>
					<Education limit={10} variant='blog' />
				</div>
			</Container>
			<Footer />
		</header>
	);
}

export default HeaderBlog;
