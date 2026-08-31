import EducationArticleCard from './EducationArticleCard';
import styles from './Education.module.scss';

const articles = [
	{
		id: 1,
		title: 'Article #1',
		description:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising.',
		author: 'Scott Johnson',
		authorImage: '/scott-johnson.png',
		variant: 'featured' as const,
		backgroundImage: '/article-1-background.jpg',
	},
	{
		id: 2,
		title: 'Article #2',
		description:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising.',
		author: 'Justin Roberts',
		authorImage: '/justin-roberts.png',
		variant: 'default' as const,
		backgroundImage: undefined,
	},
	{
		id: 3,
		title: 'Article #3',
		description:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising.',
		author: 'Justin Roberts',
		authorImage: '/justin-roberts.png',
		variant: 'default' as const,
		backgroundImage: undefined,
	},
	...Array.from({ length: 7 }, (_, index) => ({
		id: index + 4,
		title: `Article #${index + 4}`,
		description:
			'Terms of your offer, how quickly you can turn things around and who your lender is advising.',
		author: index % 2 === 0 ? 'Scott Johnson' : 'Justin Roberts',
		authorImage: index % 2 === 0 ? '/scott-johnson.png' : '/justin-roberts.png',
		variant: (index === 3 ? 'featured' : 'default') as 'featured' | 'default',
		backgroundImage: index === 3 ? '/article-1-background.jpg' : undefined,
	})),
];

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
				{showAllArticles && <a href='/blog#articles'>All articles</a>}
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
