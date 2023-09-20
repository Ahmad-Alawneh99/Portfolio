"use client"
import sharedStyles from './shared.module.scss'
import Header from '../components/header/Header';
import TitledSection from '../components/titledSection/TitledSection';
import LeadSpace from '../components/leadSpace/LeadSpace';

export default function RenderHomePage() {
  return (
	<>
		<Header/>
		<main className={sharedStyles.main}>
			<TitledSection>
				<LeadSpace/>
			</TitledSection>
		</main>
	</>
	)
}
