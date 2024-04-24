import Link from 'next/link';
import headerStyles from './header.module.scss';

export default function Header() {
	return (
		<div className={headerStyles.headerContainer}>
			<div className={headerStyles.headerItemsContainer}>
				<Link href='/' className={headerStyles.nameLink}><p className={headerStyles.title}>Ahmad Alawneh</p></Link>
				<a className={headerStyles.getInTouch} href='mailto:ahmad.alawneh9922@gmail.com'>Get in touch</a>
			</div>
		</div>
	);
}
