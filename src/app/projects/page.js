'use client';
import sharedStyles from '../shared.module.scss';
import Header from '../../components/header/Header';
import projectsStyles from './projects.module.scss';
import TitledSection from '../../components/titledSection/TitledSection';

export default function RenderProjectsPage() {
	return (
		<>
			<Header/>
			<main className={sharedStyles.main}>
				<div className={projectsStyles.projectsContainer}>
					<TitledSection title='Test title'>
						Test sample content
					</TitledSection>
					<TitledSection title='Test title'>
						Test sample content
					</TitledSection>
				</div>
			</main>
		</>
	);
}
