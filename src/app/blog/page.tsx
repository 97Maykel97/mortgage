import HeaderBlog from '@/components/HeaderBlog';
import Container from '@/components/Container';
import Education from '@/components/Education/Education';
import Footer from '@/components/Footer';
import Resources from '@/components/Resources/Resources';
import VideoCard from '@/components/VideoCard';

import styles from './page.module.scss';

export default function BlogPage() {
	return (
		<main>
			<HeaderBlog />
			<Container>
				<section className={styles.videos}>
					<VideoCard title='What are points and credits?' duration='0:27' />
					<VideoCard title='Why a mortgage is so much more than just a rate?' duration='0:34' />
					<VideoCard title='Why a mortgage is so much more than just a rate?' duration='0:34' />
					<VideoCard title='What are points and credits?' duration='0:27' />
					<VideoCard title='Why a mortgage is so much more than just a rate?' duration='0:34' />
					<VideoCard title='Why a mortgage is so much more than just a rate?' duration='0:34' />
				</section>

				<div className={styles.resources}>
					<Resources direction='row' className={styles.blogResources} />
				</div>

				<div className={styles.education}>
					<Education limit={10} variant='blog' />
				</div>
			</Container>
			<Footer />
		</main>
	);
}
