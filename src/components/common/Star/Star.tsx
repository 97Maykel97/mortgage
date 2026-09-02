import { useId } from 'react';

import styles from './Star.module.scss';

type TStarProps = {
	fill?: number;
};

function Star({ fill = 1 }: TStarProps) {
	const gradientId = useId();
	const fillPercent = `${Math.max(0, Math.min(fill, 1)) * 100}%`;

	return (
		<svg className={styles.star} viewBox='0 0 16 15' aria-hidden='true'>
			<defs>
				<linearGradient id={gradientId}>
					<stop offset={fillPercent} stopColor='#278fb4' />
					<stop offset={fillPercent} stopColor='#e5e5e5' />
				</linearGradient>
			</defs>

			<path
				d='M8.16103 0.2448L10.1434 4.9368L15.2186 5.3728C15.5706 5.4032 15.7138 5.8424 15.4466 6.0736L11.597 9.4088L12.7506 14.3704C12.8306 14.7152 12.457 14.9864 12.1546 14.8032L7.79303 12.1728L3.43143 14.8032C3.12823 14.9856 2.75543 14.7144 2.83543 14.3704L3.98903 9.4088L0.138625 6.0728C-0.128575 5.8416 0.0138254 5.4024 0.366625 5.372L5.44183 4.936L7.42423 0.2448C7.56183 -0.0816 8.02343 -0.0816 8.16103 0.2448Z'
				fill={`url(#${gradientId})`}
			/>
		</svg>
	);
}

export default Star;
