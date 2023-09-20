import leadSpaceStyles from './leadSpace.module.scss';

export default function RenderLeadSpace() {
	return (
		<div className={leadSpaceStyles.leadSpaceContainer}>
            <p>Hey there!</p>
            <div className={leadSpaceStyles.nameContainer}>
                <span>I am</span>
                <h1 className={leadSpaceStyles.name}>Ahmad</h1>
            </div>
            <p>A Software Engineer 💻, Designer of Technical Solutions 🔎, Expert in NodeJS and Frontend 🔭</p>
		</div>
	)
}
