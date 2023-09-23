"use client"
import Link from 'next/link'
import sharedStyles from './shared.module.scss'
import notFoundStyles from './notFound.module.scss';
import { useLayoutEffect } from 'react';
import { icons } from '@/icons';

export default function Render404() {
	useLayoutEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		document.body.dataset.theme = storedTheme;
	});

  return (
		<main className={sharedStyles.main}>
			<h1 className={notFoundStyles.header}>Oh no!</h1>
			<h3 className={notFoundStyles.headline}>The requested page could not be found!</h3>
			<Link href='/' className={notFoundStyles.backToHome}>Back to home {icons.arrowRight}</Link>
		</main>
	)
}
