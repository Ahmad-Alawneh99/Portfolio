'use client';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import sharedStyles from '../../shared.module.scss';
import Header from '../../../components/header/Header';
import { projects } from '../projects';
import TitledSection from '../../../components/titledSection/TitledSection';
import projectsStyles from '../projects.module.scss';
import ImageModal from '../../../components/imageModal/ImageModal';
import Gallery from '../../../components/gallery/Gallery';

export default function ProjectsPage({ params }) {
	const [imageData, setImageData] = useState({});

	function onImageOpen(imageData) {
		document.body.dataset.modal = true;
		setImageData(imageData);
	}

	function hideModal() {
		document.body.dataset.modal = false;
	}
	const { uri } = params;
	const projectData = projects.find((project) => project.uri === uri);
	if (!projectData) {
		return notFound();
	}

	return (
		<>
			<ImageModal image={imageData.image} title={imageData.title} clickCallback={hideModal}/>
			<Header/>
			<main className={sharedStyles.main}>
				<h1 className={projectsStyles.projectTitle}>{projectData.name}</h1>
				{projectData.sections.map((section, index) =>
					<TitledSection title={section.title} key={index}>
						<div>{section.content}</div>
					</TitledSection>
				)}
				{ projectData.hasGallery ?
					<TitledSection title='Photo Gallery'>
						<p className={projectsStyles.subHeader}>Click on an image to view</p>
						<Gallery imageList={projectData.imageList} onImageOpen={onImageOpen}/>
					</TitledSection>
					: false
				}
			</main>
		</>
	);
}
