'use client';
import sharedStyles from '../../shared.module.scss';
import Header from '../../../components/header/Header';
// import projectsStyles from '../projects.module.scss';
// import TitledSection from '../../../components/titledSection/TitledSection';

export default function RenderProjectsPage({ params }) {
	const { uri } = params;

	return (
		<>
			<Header/>
			<main class Name={sharedStyles.main}>
				<div>{uri}</div>
			</main>
		</>
	);
}
