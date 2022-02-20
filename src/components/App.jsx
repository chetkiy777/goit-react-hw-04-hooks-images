import React, { useState } from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/Modal';
import styles from './styles.module.css';
const pixabayApi = new PixabayApi();

export const App = () => {
  const [imgArr, setImgArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const setLargeUrl = url => {
    setLargeImage(url);
    toggleShowModal();
  };

  const loadMore = () => {
    pixabayApi.incrementPage();
    setIsLoading(true);
    pixabayApi.getImagesFromApiByName().then(hits => {
      setImgArr([...imgArr, ...hits]);
      setIsLoading(false);
    });
  };

  const onInputFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('введите значения для поиска');
      return;
    }
    pixabayApi.query = query;
    setIsLoading(true);
    pixabayApi.getImagesFromApiByName().then(hits => {
      setImgArr([...hits]);
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.App}>
      <Searchbar onFormSubmit={onInputFormSubmit} />
      <ImageGallery imgArr={imgArr} setLargeUrl={setLargeUrl} />
      {isLoading && <Button loadMore={loadMore} />}
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
      {showModal && <Modal onClose={toggleShowModal} largeImage={largeImage} />}
    </div>
  );
};
