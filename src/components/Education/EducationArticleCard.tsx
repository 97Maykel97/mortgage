import Image from 'next/image';

import styles from './EducationArticleCard.module.scss';

type TEducationArticleCardProps = {
	title: string;
	description: string;
	author: string;
	authorImage?: string;
	backgroundImage?: string;
	variant?: 'featured' | 'default';
	layout?: 'default' | 'blog';
};

function EducationArticleCard({
	title,
	description,
	author,
	authorImage,
	backgroundImage,
	variant = 'default',
	layout = 'default',
}: TEducationArticleCardProps) {
	return (
		<article
			className={`${styles.card} ${variant === 'featured' ? styles.featured : styles.default} ${layout === 'blog' ? styles.blogLayout : ''}`}
		>
			<a className={styles.cardLink} href='/article' aria-label={title} />
			{variant === 'featured' && backgroundImage && (
				<Image
					className={styles.background}
					src={backgroundImage}
					alt={`${title} article image`}
					fill
					sizes='818px'
				/>
			)}
			<div className={styles.content}>
				<p className={styles.label}>Blog</p>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>

			<hr className={styles.divider} />

			<div className={styles.author}>
				<div className={styles.authorImage}>
					{authorImage && (
						<Image src={authorImage} alt={author} fill sizes='52px' />
					)}
				</div>

				<div className={styles.authorInfo}>
					<span>by</span>
					<strong>{author}</strong>
				</div>
			</div>
		</article>
	);
}

export default EducationArticleCard;
