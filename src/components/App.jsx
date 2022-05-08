import React, { useEffect, useState } from 'react';
import { Container } from './App.styled';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/Modal';
const pixabayApi = new PixabayApi();

export const App = () => {
  const [imgArr, setImgArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showButtonLoad, setShowButtonLoad] = useState(false);

  useEffect(() => {
    setShowButtonLoad(false);
  }, []);

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
    pixabayApi
      .getImagesFromApiByName()
      .then(hits => {
        setImgArr([...imgArr, ...hits]);
      })
      .finally(() => setIsLoading(false));
  };

  const newFindRequest = query => {
    pixabayApi.query = query;
    pixabayApi.resetPage();
    setIsLoading(true);
    pixabayApi
      .getImagesFromApiByName()
      .then(hits => {
        setImgArr([...hits]);
        setShowButtonLoad(true);
      })
      .finally(() => setIsLoading(false));
  }

  const onInputFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('введите значения для поиска');
      return;
    }

    newFindRequest(query);
  };

  return (
    <Container>
      <Searchbar onFormSubmit={onInputFormSubmit} />
      <ImageGallery imgArr={imgArr} setLargeUrl={setLargeUrl} />
      {showButtonLoad === true ? <Button loadMore={loadMore} /> : ''}
      {isLoading === true && <Loader />}
      <ToastContainer autoClose={3000} />
      {showModal && <Modal onClose={toggleShowModal} largeImage={largeImage} />}
    </Container>
  );
};
