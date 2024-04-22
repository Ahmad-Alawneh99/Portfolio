import Link from 'next/link';
import { usePathname } from 'next/navigation';
import headerStyles from './header.module.scss';

export default function Header() {
	return (
		<div className={headerStyles.headerContainer}>
			<div className={headerStyles.headerItemsContainer}>
				<div className={headerStyles.leftSectionContainer}>
					<p className={headerStyles.title}>Ahmad Alawneh</p>
					<div className={headerStyles.navMenu}>
						<Link href='/' className={`${headerStyles.navItem} ${usePathname() === '/' ? headerStyles.activeNavItem : ''}`} >Home</Link>
						<Link href='/projects' className={`${headerStyles.navItem} ${usePathname() === '/projects' ? headerStyles.activeNavItem : ''}`}>Projects</Link>
					</div>
				</div>
				<div>Placeholder</div>
			</div>
		</div>
	);
}
