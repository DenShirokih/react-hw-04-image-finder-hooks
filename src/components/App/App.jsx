import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'Servise/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: [] });
      this.getImages();
    }
  }
  getImages = async () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({
      isLoading: true,
    });
    try {
      const { hits } = await fetchImages(searchQuery, currentPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      console.log('error');
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { images, isLoading, showModal, largeImage } = this.state;
    const showLoadMore = images.length > 0 && images.length >= 12;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {showModal && <Modal onClose={this.toggleModal} fullImg={largeImage} />}
        <ImageGallery images={images} getFullImg={this.handleGalleryItem} />
        {showLoadMore && <LoadMoreBtn onClick={this.getImages} />}
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}
