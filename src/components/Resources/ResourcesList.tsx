import DownloadResourceCard from './DownloadResourceCard';
import WebinarResourceCard from './WebinarResourceCard';

import styles from './ResourcesList.module.scss';

type TResourcesListProps = {
	direction?: 'row' | 'column';
};

function ResourcesList({
	direction = 'column',
}: TResourcesListProps) {
	return (
		<div
			className={`${styles.list} ${
				direction === 'row' ? styles.row : styles.column
			}`}
		>
			<DownloadResourceCard image='/book-cover.png' />
			<WebinarResourceCard image='/webinar-cover.png' />
		</div>
	);
}

export default ResourcesList;
