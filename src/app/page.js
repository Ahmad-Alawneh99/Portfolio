'use client';
import Header from '../components/header/Header';
import LeadSpace from '../components/leadSpace/LeadSpace';
import Skills from '../components/skills/Skills';
import ContactInfo from '../components/contact/ContactInfo';
import About from '../components/about/About';
import sharedStyles from './shared.module.scss';

export default function RenderHomePage() {
	return (
		<>
			<Header/>
			<main className={sharedStyles.main}>
				<LeadSpace/>
				<About/>
				<Skills/>
				<ContactInfo/>
			</main>
		</>
	);
}
