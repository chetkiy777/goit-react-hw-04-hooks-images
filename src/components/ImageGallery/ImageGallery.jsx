import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ imgArr, setLargeUrl }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imgArr.map(({ id, previewURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          path={previewURL}
          largeImage={largeImageURL}
          setLargeUrl={setLargeUrl}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(PropTypes.shape),
  setLargeUrl: PropTypes.func,
};
export default ImageGallery;
