import Image from 'next/image';

import ResourceCard from './ResourceCard';
import styles from './WebinarResourceCard.module.scss';

type TWebinarResourceCardProps = {
	title?: string;
	image?: string;
};

function WebinarResourceCard({
	title = 'Webinar name',
	image,
}: TWebinarResourceCardProps) {
	return (
		<ResourceCard>
			<div className={styles.content}>
				<div className={styles.imageWrapper}>
					{image && <Image src={image} alt={`${title} cover`} width={96} height={120} />}
				</div>
				<div className={styles.info}>
					<p className={styles.label}>Resources</p>
					<h3 className={styles.resourceTitle}>{title}</h3>
				</div>
			</div>
			<hr className={styles.divider} />
			<div className={styles.action}>
				<button type='button' className={styles.viewButton} aria-label='View webinar'>
					<span>
						<Image src='/icons/view.svg' alt='' width={16} height={16} aria-hidden='true' />
					</span>
				</button>
			</div>
		</ResourceCard>
	);
}

export default WebinarResourceCard;
