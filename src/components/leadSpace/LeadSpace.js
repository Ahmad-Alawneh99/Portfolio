import leadSpaceStyles from './leadSpace.module.scss';

export default function LeadSpace() {
	return (
		<div className={leadSpaceStyles.leadSpaceContainer}>
			<div className={leadSpaceStyles.content}>
				<h1 className={leadSpaceStyles.name}>Ahmad Alawneh</h1>
				<h3 className={leadSpaceStyles.description}>Software Engineer 💻, Technical Solutions Designer 🔬, Expert in NodeJS and Frontend 🎨</h3>
			</div>
			{/* <div className={leadSpaceStyles.imageContainer}>
				<img className={leadSpaceStyles.image} src='/gallery/placeholder.jpg'/>
			</div> */}
		</div>
	);
}
