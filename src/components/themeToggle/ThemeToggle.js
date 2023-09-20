import { useLayoutEffect, useState } from 'react';
import themeToggleStyles from './themeToggle.module.scss';
import { icons } from '@/icons';

export default function RenderThemeToggle() {
	const [theme, setTheme] = useState('');

	useLayoutEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme !== theme) {
			setTheme(storedTheme);
			document.body.dataset.theme = storedTheme;
		}
	}, [theme]);

	const handleThemeChange = () => {
		const newTheme = theme == 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.body.dataset.theme = newTheme;
	}

	return (
		<>
			<label className={themeToggleStyles.toggleContainer}>
				{theme == 'light' ? icons.lightBulbOn : icons.lightBulbOff}
				<input type='checkbox' className={themeToggleStyles.toggleCheckbox} onChange={handleThemeChange}/>
			</label>
		</>
	)
}
