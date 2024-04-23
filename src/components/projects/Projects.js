import Link from 'next/link';
import { projects } from '../../projects';
import TitledSection from '../titledSection/TitledSection';
import projectsStyles from './projects.module.scss';

export default function Projects() {
	return (
		<TitledSection title='Projects'>
			<div className={projectsStyles.projectsContainer}>
				{projects.map((project) =>
					<div className={projectsStyles.projectCard} key={project.uri}>
						<h3 className={projectsStyles.projectTitle}>{project.name}</h3>
						<div className={projectsStyles.shortDescription}>{project.shortDescription}</div>
						<Link href={`/projects/${project.uri}`}>Read more</Link>
					</div>
				)}
			</div>
		</TitledSection>
	);
}
