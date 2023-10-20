'use client';
import Link from 'next/link';
import sharedStyles from '../shared.module.scss';
import Header from '../../components/header/Header';
import TitledSection from '../../components/titledSection/TitledSection';
import projectsStyles from './projects.module.scss';
import { projects } from './projects';

export default function RenderProjectsPage() {
	return (
		<>
			<Header/>
			<main className={sharedStyles.main}>
				<div className={projectsStyles.projectsContainer}>
					{projects.map((project, index) =>
						<TitledSection title={project.name} key={index}>
							<div className={projectsStyles.shortDescription}>{project.shortDescription}</div>
							<Link href={`/projects/${project.uri}`}>Read more</Link>
						</TitledSection>
					)}
				</div>
			</main>
		</>
	);
}
