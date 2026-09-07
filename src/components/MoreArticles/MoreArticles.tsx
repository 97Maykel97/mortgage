import { articles } from '@/data/articles';
import EducationArticleCard from '../Education/EducationArticleCard';

import styles from './MoreArticles.module.scss';

function MoreArticles() {
	const moreArticles = articles.filter(article => article.id >= 8);

	return (
		<section className={styles.section} aria-labelledby='more-articles-title'>
			<h2 id='more-articles-title' className={styles.title}>
				More articles
			</h2>

			<div className={styles.list}>
				{moreArticles.map(article => (
					<EducationArticleCard
						key={article.id}
						title={article.title}
						description={article.description}
						author={article.author}
						authorImage={article.authorImage}
						backgroundImage={article.backgroundImage}
						variant={article.variant}
					/>
				))}
			</div>
		</section>
	);
}

export default MoreArticles;
