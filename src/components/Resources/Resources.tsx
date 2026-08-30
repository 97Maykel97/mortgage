import ResourcesList from './ResourcesList';

import styles from './Resources.module.scss';

type TResourcesProps = {
	direction?: 'row' | 'column';
	className?: string;
	stackOnTablet?: boolean;
};

function Resources({ direction = 'column', className = '', stackOnTablet = false }: TResourcesProps) {
	return (
		<section className={`${styles.section} ${className}`}>
			<h2 className={styles.title}>Resources</h2>

			<ResourcesList direction={direction} stackOnTablet={stackOnTablet} className={className} />
		</section>
	);
}

export default Resources;
