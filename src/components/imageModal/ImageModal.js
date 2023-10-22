import Image from 'next/image';
import imageModalStyles from './imageModal.module.scss';

export default function RenderImageModal({ image, title, clickCallback }) {
	return (
		<div className='imageModal' onClick={() => clickCallback(image, title)}>
			<Image src={image} width={0} height={0} sizes='100vw' alt={title} className={imageModalStyles.image} onClick={(e) => e.stopPropagation()}/>
			<p className={imageModalStyles.imageTitle} onClick={(e) => e.stopPropagation()}>{title}</p>
		</div>
	);
}
