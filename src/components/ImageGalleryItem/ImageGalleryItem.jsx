import { ImageGalleryItems, GalleryItemImage } from './ImageGalleryItem.module';
export const ImageGalleryItem = ({ image, getFullImg }) => {
  const FullImg = () => getFullImg(image.largeImageURL);
  return (
    <ImageGalleryItems>
      <GalleryItemImage
        src={image.webformatURL}
        alt={image.largeImageURL}
        onClick={FullImg}
      />
    </ImageGalleryItems>
  );
};
