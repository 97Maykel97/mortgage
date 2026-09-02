import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';

type TLogoVariant = 'main' | 'secondary';

type TLogoConfig = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

type TLogoProps = {
	variant?: TLogoVariant;
	className?: string;
	href?: string;
	priority?: boolean;
	onClick?: () => void;
};

const logoVariants: Record<TLogoVariant, TLogoConfig> = {
	main: {
		src: '/main-logo.png',
		alt: 'Mortgage logo',
		width: 240,
		height: 43,
	},
	secondary: {
		src: '/secondary-logo.png',
		alt: 'Mortgage secondary logo',
		width: 240,
		height: 43,
	},
};

function Logo({
	variant = 'main',
	className,
	href = '/',
	priority = false,
	onClick,
}: TLogoProps) {
	const logo = logoVariants[variant];

	return (
		<Link
			className={className}
			href={href}
			onClick={onClick}
			aria-label='Go to home page'
		>
			<Image
				className={styles.image}
				src={logo.src}
				alt={logo.alt}
				width={logo.width}
				height={logo.height}
				priority={priority}
			/>
		</Link>
	);
}

export default Logo;
