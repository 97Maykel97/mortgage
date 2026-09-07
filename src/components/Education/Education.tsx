import EducationArticleCard from './EducationArticleCard';
import { articles } from '@/data/articles';
import styles from './Education.module.scss';

type TEducationProps = {
	limit?: number;
	variant?: 'default' | 'blog';
	showAllArticles?: boolean;
};

function Education({
	limit = 3,
	variant = 'default',
	showAllArticles = false,
}: TEducationProps) {
	const blogOrder = [
		articles[0],
		articles[3],
		articles[1],
		articles[2],
		articles[4],
		articles[5],
		articles[6],
		articles[7],
		articles[8],
		articles[9],
	];
	const displayedArticles = (variant === 'blog' ? blogOrder : articles).slice(
		0,
		limit,
	);

	return (
		<section className={`${styles.section} ${variant === 'blog' ? styles.blogLayout : ''}`} aria-labelledby='education-title'>
			<header className={styles.header}>
				<h2 id='education-title'>Education</h2>
				{showAllArticles && <a href='/article'>All articles</a>}
			</header>

			<div className={styles.articles} id='articles'>
				{displayedArticles.map(article => (
					<EducationArticleCard
						key={article.id}
						title={article.title}
						description={article.description}
						author={article.author}
						authorImage={article.authorImage}
						backgroundImage={article.backgroundImage}
						variant={article.variant}
						layout={variant}
					/>
				))}
			</div>
		</section>
	);
}

export default Education;
