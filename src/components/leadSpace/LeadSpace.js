import TitledSection from '../titledSection/TitledSection';
import leadSpaceStyles from './leadSpace.module.scss';

export default function LeadSpace() {
	return (
		<TitledSection>
			<div className={leadSpaceStyles.leadSpaceContainer}>
				<p>Hey there!</p>
				<div className={leadSpaceStyles.nameContainer}>
					<span>I am</span>
					<h1 className={leadSpaceStyles.name}>Ahmad</h1>
				</div>
				<p>Software Engineer 💻, Technical Solutions Designer 🔬, Expert in NodeJS and Frontend 🎨</p>
			</div>
		</TitledSection>
	);
}
