import './globals.scss'
import { Kalam } from 'next/font/google'

const inter = Kalam({ weight: '400', subsets: ['latin'] })

export const metadata = {
	title: 'Ahmad Alawneh',
	description: 'Ahmad Alawneh\'s portfolio',
	keywords: ['ahmad', 'alawneh', 'ahmad alawneh', 'developer', 'software engineer'],
	generator: 'Next.js',
	applicationName: 'Ahmad\'s Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} data-theme='dark'>{children}</body>
		</html>
	)
}
