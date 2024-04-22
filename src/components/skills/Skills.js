import ImageCard from '../imageCard/ImageCard';
import TitledSection from '../titledSection/TitledSection';
import { skills } from '../../skillList';
import skillsStyles from './skills.module.scss';

export default function Skills() {
	return (
		<TitledSection title='Skill set'>
			<div className={skillsStyles.skillsContainer}>
				{skills.map((skill, index) =>
					<ImageCard text={skill.title} icon={skill.icon} key={index}></ImageCard>
				)}
			</div>
		</TitledSection>
	);
}
