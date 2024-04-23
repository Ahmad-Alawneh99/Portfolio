import About from '../components/about/About';
import ContactInfo from '../components/contact/ContactInfo';
import Header from '../components/header/Header';
import LeadSpace from '../components/leadSpace/LeadSpace';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import sharedStyles from './shared.module.scss';

export default function HomePage() {
	return (
		<>
			<Header/>
			<main className={sharedStyles.main}>
				<LeadSpace/>
				<About/>
				<Skills/>
				<Projects/>
				<ContactInfo/>
			</main>
		</>
	);
}
