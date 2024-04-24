import { projects } from '../../../projects';

export function generateMetadata({ params }) {
	const project = projects.find((project) => project.uri === params.uri);

	if (!project) {
		return {};
	}

	return {
		title: project.name,
		description: `${project.name} by Ahmad Alawneh`,
		keywords: ['ahmad', 'alawneh', 'ahmad alawneh', 'developer', 'software engineer', 'frontend engineer', project.name],
		generator: 'Next.js',
		applicationName: 'Ahmad\'s Portfolio',
		icons: {
			icon: '../../favicon.ico',
		},
	};
}

export default function ProjectLayout({ children }) {
	return children;
}
