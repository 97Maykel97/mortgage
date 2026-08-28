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
};

function Education({ limit = 3 }: TEducationProps) {
	return (
		<section className={styles.section} aria-labelledby='education-title'>
			<header className={styles.header}>
				<h2 id='education-title'>Education</h2>
				<a href='#articles'>All articles</a>
			</header>

			<div className={styles.articles} id='articles'>
				{articles.slice(0, limit).map(article => (
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

export default Education;
