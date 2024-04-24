import TitledSection from '../titledSection/TitledSection';
import contactInfoStyles from './contactInfo.module.scss';

export default function ContactInfo() {
	return (
		<TitledSection title='Get in touch'>
			<div className={contactInfoStyles.contactInfoContainer}>
				<p>Email: <a href='mailto:ahmad.alawneh9922@gmail.com'>ahmad.alawneh9922@gmail.com</a></p>
				<p>LinkedIn: <a href='https://www.linkedin.com/in/ahmad-alawneh-158751202/' target='_blank'>https://www.linkedin.com/in/ahmad-alawneh-158751202/</a></p>
				<p>Github: <a href='https://github.com/Ahmad-Alawneh99' target='_blank'>https://github.com/Ahmad-Alawneh99</a></p>
			</div>
		</TitledSection>
	);
}
