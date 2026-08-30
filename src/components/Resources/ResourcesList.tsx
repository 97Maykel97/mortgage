import DownloadResourceCard from './DownloadResourceCard';
import WebinarResourceCard from './WebinarResourceCard';

import styles from './ResourcesList.module.scss';

type TResourcesListProps = {
	direction?: 'row' | 'column';
	stackOnTablet?: boolean;
	className?: string;
};

function ResourcesList({
	direction = 'column',
	stackOnTablet = false,
	className = '',
}: TResourcesListProps) {
	return (
		<div
			className={`${styles.list} ${direction === 'row' ? styles.row : styles.column} ${stackOnTablet ? styles.stackOnTablet : ''} ${className}`}
		>
			<DownloadResourceCard image='/book-cover.png' />
			<WebinarResourceCard image='/webinar-cover.png' />
		</div>
	);
}

export default ResourcesList;
