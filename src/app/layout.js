import './globals.scss';
import { Noto_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Noto_Sans({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'Ahmad Alawneh',
	description: 'Ahmad Alawneh\'s portfolio',
	keywords: ['ahmad', 'alawneh', 'ahmad alawneh', 'developer', 'software engineer', 'frontend engineer'],
	generator: 'Next.js',
	applicationName: 'Ahmad\'s Portfolio',
	icons: {
		icon: './favicon.ico',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
