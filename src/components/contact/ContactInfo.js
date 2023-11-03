import TitledSection from '../titledSection/TitledSection';
import contactInfoStyles from './contactInfo.module.scss';

export default function ContactInfo() {
	return (
		<TitledSection title='Contact info'>
			<div className={contactInfoStyles.contactInfoContainer}>
				<p>Email me at: <a href='mailto:ahmad.alawneh9922@gmail.com'>ahmad.alawneh9922@gmail.com</a></p>
				<p>View my linkedin profile: <a href='https://www.linkedin.com/in/ahmad-alawneh-158751202/' target='_blank'>https://www.linkedin.com/in/ahmad-alawneh-158751202/</a></p>
				<p>Check out my Github profile: <a href='https://github.com/Ahmad-Alawneh99' target='_blank'>https://github.com/Ahmad-Alawneh99</a></p>
			</div>
		</TitledSection>
	);
}
