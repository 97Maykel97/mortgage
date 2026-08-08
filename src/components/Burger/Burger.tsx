'use client';

import { useEffect, useId, useState } from 'react';

import BurgerMenu, { type TMenuItem } from './BurgerMenu';
import styles from './Burger.module.scss';

const menuItems: TMenuItem[] = [
	{
		id: 'teachers',
		href: '#teachers',
		label: 'Your teachers',
	},
	{
		id: 'journey',
		href: '#journey',
		label: 'Your mortgage journey',
	},
	{
		id: 'reviews',
		href: '#reviews',
		label: 'What our customers say',
	},
	{
		id: 'blog',
		href: '/blog',
		label: 'Blog',
	},
	{
		id: 'ebook',
		href: '/ebook',
		label: 'Ebook',
	},
	{
		id: 'webinar',
		href: '/webinar',
		label: 'Webinar',
	},
];

function Burger() {
	const [isOpen, setIsOpen] = useState(false);
	const menuId = useId();

	useEffect(() => {
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		window.addEventListener('keydown', closeOnEscape);

		return () => {
			window.removeEventListener('keydown', closeOnEscape);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(currentValue => !currentValue);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button
				type='button'
				className={`${styles.button} ${isOpen ? styles.buttonOpen : ''}`}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
				aria-controls={menuId}
				onClick={toggleMenu}
			>
				<span />
				<span />
				<span />
			</button>

			<div
				className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
				aria-hidden='true'
				onClick={closeMenu}
			/>

			<BurgerMenu
				id={menuId}
				isOpen={isOpen}
				items={menuItems}
				onClose={closeMenu}
			/>
		</>
	);
}

export default Burger;
