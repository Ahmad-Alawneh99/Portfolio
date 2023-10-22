import './globals.scss';
import RenderSharedLayout from './sharedLayout';

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
	return RenderSharedLayout(children);
}
