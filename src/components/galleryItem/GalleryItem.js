import Image from 'next/image';
import galleryItemStyles from './galleryItem.module.scss';

export default function GalleryItem({ image, title, onImageOpen }) {
	return (
		<div className={galleryItemStyles.galleryItemContainer}>
			<Image src={image} alt={title} className={galleryItemStyles.galleryImage} width={125} height={125} onClick={() => onImageOpen({ image, title })}/>
			<p className={galleryItemStyles.galleryItemTitle}>{title}</p>
		</div>
	);
}
