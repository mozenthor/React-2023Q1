import './cardsWrapper.scss';
import Card from './card/card';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import React from 'react';
import ModalWindow from './modalWindow/modalWindow';

function CardsWrapper() {
  const modalWindowActive = useSelector((state: RootState) => state.photoById.modalWindowActive);
  const { photos, status } = useSelector((state: RootState) => state.photos);

  return (
    <div>
      {status === 'initial' && <h3>Type text to search for a photo</h3>}
      {status === 'loading' && <h3>LOADING...</h3>}
      {status === 'resolved' && !photos.length && <h3>NOT FOUND</h3>}
      {status === 'resolved' && !!photos.length && (
        <div className="cards_wrapper">
          {photos.map((DataElement) => (
            <Card key={DataElement.id} data={DataElement}></Card>
          ))}
        </div>
      )}
      {modalWindowActive && <ModalWindow></ModalWindow>}
    </div>
  );
}

export default CardsWrapper;
