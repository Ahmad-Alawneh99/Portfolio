import imageCardStyles from './imageCard.module.scss';

export default function RenderImageCard({ text, icon }) {
	return (
        <div className={imageCardStyles.imageCardContainer}>
            {icon}
            <p>{text}</p>
        </div>
	)
}
