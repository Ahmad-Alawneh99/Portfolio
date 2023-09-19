"use client"
import sharedStyles from './shared.module.scss'
import pageStyles from './page.module.scss';
import Header from '../components/header/Header';

export default function RenderHomePage() {
  return (
		<main className={sharedStyles.main}>
			<Header/>
			<h1>Coming soon!</h1>
			<div className={pageStyles.container}>
				<p className={pageStyles.headline}>Ahmad&apos;s Portfolio</p>
			</div>
		</main>
	)
}
