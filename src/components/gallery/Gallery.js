
import GalleryItem from '../galleryItem/GalleryItem';
import galleryStyles from './gallery.module.scss';

export default function RenderGallery({ imageList, onImageOpen }) {
	return (
		<div className={galleryStyles.galleryContainer}>
			{imageList.map((imageData, index) =>
				<GalleryItem image={imageData.image} title={imageData.title} onImageOpen={onImageOpen} key={index}/>
			)}
		</div>
	);
}
