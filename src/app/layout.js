import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Ahmad Alawneh',
	description: 'Ahmad Alawneh\'s portfolio',
	keywords: ['ahmad', 'alawneh', 'ahmad alawneh', 'developer', 'software engineer'],
	generator: 'Next.js',
	applicationName: 'Ahmad\'s Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
