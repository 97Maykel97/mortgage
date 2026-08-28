import Image from 'next/image';

import styles from './EducationArticleCard.module.scss';

type TEducationArticleCardProps = {
	title: string;
	description: string;
	author: string;
	authorImage?: string;
	backgroundImage?: string;
	variant?: 'featured' | 'default';
};

function EducationArticleCard({
	title,
	description,
	author,
	authorImage,
	backgroundImage,
	variant = 'default',
}: TEducationArticleCardProps) {
	return (
		<article
			className={`${styles.card} ${
				variant === 'featured' ? styles.featured : styles.default
			}`}
		>
			{variant === 'featured' && backgroundImage && (
				<Image
					className={styles.background}
					src={backgroundImage}
					alt=''
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
						<Image src={authorImage} alt='' fill sizes='52px' />
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
