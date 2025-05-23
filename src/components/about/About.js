import TitledSection from '../titledSection/TitledSection';
import aboutStyles from './about.module.scss';

export default function About() {
	return (
		<TitledSection title='About me'>
			<div className={aboutStyles.aboutContainer}>
				<p>
					It all began in 2017 when I joined <a href='https://www.psut.edu.jo/' target='_blank'>PSUT</a> as an undergraduate majoring in software engineering. At the time, I didn&apos;t know much about software engineering, but my fascination with computers had been with me since I was a four-year-old child. Throughout my academic years, I consistently excelled in my coursework, earning high grades that reflected my dedication to mastering the field.
				</p>
				<p>
					In parallel, I actively engaged in various non-academic activities, such as problem-solving contests, software development hackathons, and other non-technical pursuits that enhanced my soft skills, including communication and public speaking.
				</p>
				<p>
					Fast forward four years, I graduated and transitioned into a full-time role as a software engineer at <a href='https://optimumpartners.co/' target='_blank'>Optimum Partners Jordan</a>, where I&apos;ve stayed for almost four years, before switching to a new role at <a href='https://avertra.com/' target='_blank'>avertra</a>.
				</p>
				<p>
					Throughout this journey, one constant has remained: my unwavering desire to continually learn and grow in the field of software engineering. It has always been, and will continue to be something I genuinely enjoy.
				</p>
			</div>
		</TitledSection>
	);
}
