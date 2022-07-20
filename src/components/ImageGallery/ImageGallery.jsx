import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryLIst } from './ImageGallery.module';
export const ImageGallery = ({ images, getFullImg }) => {
  return (
    <ImageGalleryLIst>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} getFullImg={getFullImg}/>;
      })}
    </ImageGalleryLIst>
  );
};
