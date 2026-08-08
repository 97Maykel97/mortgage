import Image from 'next/image';

import styles from './SkillItem.module.scss';

type TSkillItemProps = {
	name: string;
	icon?: string;
};

function SkillItem({ name, icon }: TSkillItemProps) {
	return (
		<li className={styles.skill}>
			<span className={styles.iconWrapper}>
				{icon && (
					<Image
						className={styles.icon}
						src={icon}
						alt=''
						width={24}
						height={24}
						aria-hidden='true'
					/>
				)}
			</span>
			<span className={styles.name}>{name}</span>
		</li>
	);
}

export default SkillItem;
