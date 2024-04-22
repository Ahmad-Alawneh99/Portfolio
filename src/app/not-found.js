import Link from 'next/link';
import sharedStyles from './shared.module.scss';
import notFoundStyles from './notFound.module.scss';

export default function Render404() {
	return (
		<main className={sharedStyles.main}>
			<h1 className={notFoundStyles.header}>Oh no!</h1>
			<h3 className={notFoundStyles.headline}>The requested page could not be found!</h3>
			<Link href='/' className={notFoundStyles.backToHome}>Back to home</Link>
		</main>
	);
}
