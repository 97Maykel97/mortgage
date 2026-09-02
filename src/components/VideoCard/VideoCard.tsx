import Image from 'next/image';

import PlayButton from '@/components/common/PlayButton';

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
	const [minutes, seconds] = duration.split(':').map(Number);
	const durationDateTime = `PT${minutes ? `${minutes}M` : ''}${seconds}S`;

	return (
		<article className={cardClasses}>
			<Image
				className={styles.background}
				src={imageSrc}
				alt={`Illustration for ${title}`}
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
				<time className={styles.duration} dateTime={durationDateTime}>
					{duration}
				</time>
			</div>
		</article>
	);
}

export default VideoCard;
