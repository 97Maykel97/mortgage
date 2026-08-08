import Image from 'next/image';

import PlayButton from '@/components/PlayButton';

import styles from './VideoCard.module.scss';

type TVideoCardSize = 's' | 'm' | 'l';

type TVideoCardProps = {
	title: string;
	duration: string;
	size?: TVideoCardSize;
	className?: string;
	videoUrl?: string;
};

function VideoCard({
	title,
	duration,
	size = 'm',
	className = '',
	videoUrl = '#',
}: TVideoCardProps) {
	const imageSrc =
		size === 'l' ? '/videoCard-img-l.png' : '/videoCard-img-m-s.png';
	const cardClasses = [styles.card, styles[size], className]
		.filter(Boolean)
		.join(' ');

	return (
		<article className={cardClasses}>
			<Image
				className={styles.background}
				src={imageSrc}
				alt=''
				fill
				sizes='(max-width: 600px) 100vw, 796px'
				aria-hidden='true'
				unoptimized
			/>

			<div className={styles.overlay}>
				<PlayButton
					className={styles.playButton}
					href={videoUrl}
					label={`Play video: ${title}`}
					variant='light'
				/>

				<h3 className={styles.title}>{title}</h3>
				<span className={styles.duration}>{duration}</span>
			</div>
		</article>
	);
}

export default VideoCard;
