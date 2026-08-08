import type { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './ButtonLink.module.scss';

type TButtonLinkProps = {
	href: string;
	children: ReactNode;
	variant?: 'primary' | 'secondary';
	showArrow?: boolean;
};

function ButtonLink({
	href,
	children,
	variant = 'primary',
	showArrow = false,
}: TButtonLinkProps) {
	return (
		<Link className={`${styles.button} ${styles[variant]}`} href={href}>
			<span>{children}</span>

			{showArrow && (
				<Image
					src='/icons/arrow-right.svg'
					alt='Arrow right'
					width={20}
					height={12}
				/>
			)}
		</Link>
	);
}

export default ButtonLink;
