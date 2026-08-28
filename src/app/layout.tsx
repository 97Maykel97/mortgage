import type { Metadata } from 'next';
import Burger from '@/components/Burger';

import './tailwind.css';
import './globals.scss';

export const metadata: Metadata = {
	title: 'Mortgage',
	description: 'Mortgage website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning>
				<Burger />
				{children}
			</body>
		</html>
	);
}
