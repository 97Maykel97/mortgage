import type { ReactNode } from 'react';

import styles from './ResourceCard.module.scss';

type TResourceCardProps = {
	children: ReactNode;
	className?: string;
};

function ResourceCard({ children, className = '' }: TResourceCardProps) {
	return (
		<article className={`${styles.card} ${className}`}>{children}</article>
	);
}

export default ResourceCard;
