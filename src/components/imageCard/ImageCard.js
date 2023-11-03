import imageCardStyles from './imageCard.module.scss';

export default function ImageCard({ text, icon }) {
	return (
		<div className={imageCardStyles.imageCardContainer}>
			{icon}
			<p>{text}</p>
		</div>
	);
}
