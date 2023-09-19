import headerStyles from './header.module.scss';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function RenderHeader() {
	return (
		<div className={headerStyles.headerContainer}>
			<ThemeToggle/>
		</div>
	)
}
