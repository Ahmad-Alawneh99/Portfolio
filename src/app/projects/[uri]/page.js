'use client';
import { notFound } from 'next/navigation';
import sharedStyles from '../../shared.module.scss';
import Header from '../../../components/header/Header';
import { projects } from '../projects';
import TitledSection from '../../../components/titledSection/TitledSection';

export default function RenderProjectsPage({ params }) {
	const { uri } = params;
	const projectData = projects.find((project) => project.uri === uri);
	if (!projectData) {
		return notFound();
	}

	return (
		<>
			<Header/>
			<main className={sharedStyles.main}>
				<h1>{projectData.name}</h1>
				{projectData.sections.map((section, index) =>
					<TitledSection title={section.title} key={index}>
						<div>{section.content}</div>
					</TitledSection>
				)}
			</main>
		</>
	);
}
