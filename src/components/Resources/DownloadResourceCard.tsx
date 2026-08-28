import Image from 'next/image';
import ResourceCard from './ResourceCard';
import styles from './DownloadResourceCard.module.scss';

type TDownloadResourceCardProps = { title?: string; image?: string };

function DownloadResourceCard({ title = '9 Things You Must Know About Buying Your First Home', image }: TDownloadResourceCardProps) {
	return <ResourceCard><div className={styles.content}><div className={styles.imageWrapper}>{image && <Image src={image} alt='' width={96} height={120} />}</div><div className={styles.info}><p className={styles.label}>Resources</p><h3 className={styles.resourceTitle}>{title}</h3></div></div><hr className={styles.divider} /><div className={styles.action}><button type='button' className={styles.downloadButton}><span>Download</span><img src='/icons/download-arrow.svg' alt='' aria-hidden='true' /></button></div></ResourceCard>;
}

export default DownloadResourceCard;
