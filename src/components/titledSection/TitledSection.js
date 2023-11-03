import titledSectionStyles from './titledSection.module.scss';

export default function TitledSection({ children, title }) {
	return (
		<div className={titledSectionStyles.sectionContainer}>
			{title ? <h3 className={titledSectionStyles.sectionTitle}>{title}</h3> : false}
			{children}
		</div>
	);
}
