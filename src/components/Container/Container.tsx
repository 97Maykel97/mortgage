import type { ReactNode } from 'react';

import styles from './Container.module.scss';

type TContainerProps = {
	children: ReactNode;
	className?: string;
};

function Container({ children, className = '' }: TContainerProps) {
	return (
		<div className={`${styles.container} ${className}`.trim()}>{children}</div>
	);
}

export default Container;
