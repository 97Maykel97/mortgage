import Link from 'next/link';

import Logo from '@/components/Logo';

import BurgerActions from './BurgerActions';
import styles from './BurgerMenu.module.scss';

export type TMenuItem = {
	id: string;
	href: string;
	label: string;
};

type TBurgerMenuProps = {
	id: string;
	isOpen: boolean;
	items: TMenuItem[];
	onClose: () => void;
};

function BurgerMenu({ id, isOpen, items, onClose }: TBurgerMenuProps) {
	return (
		<nav
			id={id}
			className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
			aria-label='Main navigation'
			aria-hidden={!isOpen}
		>
			<Logo
				className={styles.logoLink}
				variant='main'
				onClick={onClose}
				priority
			/>

			<div className={styles.links}>
				{items.map(item => (
					<Link key={item.id} href={item.href} onClick={onClose}>
						{item.label}
					</Link>
				))}
			</div>

			<BurgerActions getStartedHref='/get-started' scheduleHref='/schedule' />
		</nav>
	);
}

export default BurgerMenu;
