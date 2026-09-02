import Image from 'next/image';

import styles from './PlayButton.module.scss';

type TPlayButtonProps = {
	label: string;
	href?: string;
	className?: string;
	variant?: 'default' | 'light';
};

function PlayButton({
	label,
	href,
	className,
	variant = 'default',
}: TPlayButtonProps) {
	const classes = [styles.button, className].filter(Boolean).join(' ');
	const iconSrc =
		variant === 'light' ? '/icons/oval-light.svg' : '/icons/oval.svg';
	const icon = (
		<Image
			className={styles.icon}
			src={iconSrc}
			alt=''
			width={60}
			height={60}
			aria-hidden='true'
		/>
	);

	if (href) {
		return (
			<a className={classes} href={href} aria-label={label}>
				{icon}
			</a>
		);
	}

	return (
		<button className={classes} type='button' aria-label={label}>
			{icon}
		</button>
	);
}

export default PlayButton;
