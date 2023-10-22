import Image from 'next/image';
import galleryItemStyles from './galleryItem.module.scss';

export default function RenderGalleryItem({ image, title, onImageOpen }) {
	return (
		<div className={galleryItemStyles.galleryItemContainer}>
			<Image src={image} alt={title} className={galleryItemStyles.galleryImage} width={100} height={100} onClick={() => onImageOpen({image, title})}/>
			<p>{title}</p>
		</div>
	);
}
