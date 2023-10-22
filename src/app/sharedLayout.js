import { Kalam } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Kalam({ weight: '400', subsets: ['latin'] });

export default function RenderSharedLayout(children) {

	return (
		<html lang='en'>
			<body className={inter.className} data-theme='dark'>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
