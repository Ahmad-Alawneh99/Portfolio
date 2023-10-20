import headerStyles from './header.module.scss';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function RenderHeader() {
	return (
		<div className={headerStyles.headerContainer}>
			<div className={headerStyles.headerItemsContainer}>
				<p className={headerStyles.title}>Ahmad Alawneh</p>
				<ThemeToggle/>
			</div>
		</div>
	);
}
