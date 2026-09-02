import Image from 'next/image';

import PlayButton from '@/components/common/PlayButton';

import styles from './HeaderVideo.module.scss';

function HeaderVideo() {
	return (
		<div className={styles.media}>
			<Image
				className={styles.background}
				src='/bg-header-image.jpg'
				alt='Cat standing in a bathroom'
				width={586}
				height={720}
				priority
			/>

			<div className={styles.videoInfo}>
				<p className={styles.videoTitle}>
					Why a mortgage is so much more than just a rate?
				</p>

				<div className={styles.videoControls}>
					<PlayButton
						className={styles.playButton}
						label='Play video'
					/>

					<span className={styles.duration}>0:34</span>
				</div>
			</div>
		</div>
	);
}

export default HeaderVideo;
