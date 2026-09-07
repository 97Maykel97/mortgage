import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo';
import ReportContents from '@/components/Article/ReportContents';
import MoreArticles from '@/components/MoreArticles';
import Footer from '@/components/layout/Footer';

import styles from './page.module.scss';

const reportDescription =
	"So you're about to get into the world of homeownership. It's okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be.";

const reportItems = [
	{
		title: '1st thing',
		description: reportDescription,
		image: '/desert.jpg',
	},
	{
		title: '2nd thing',
		description: reportDescription,
		image: '/stars.jpg',
	},
];

function ArticlePage() {
	return (
		<main>
			<header className={styles.header}>
				<Logo variant='secondary' className={styles.logo} />
				<Container>
					<div className={styles.heroContent}>
						<h1 className={styles.title}>
							9 Things You Must Know About Buying Your First Home
						</h1>
						<p className={styles.author}>Scott Johnson</p>
					</div>
				</Container>
			</header>

			<ReportContents
				title="What's in the report"
				description={reportDescription}
				items={reportItems}
			/>

			<Container>
				<MoreArticles />
			</Container>

			<Footer />
		</main>
	);
}

export default ArticlePage;
