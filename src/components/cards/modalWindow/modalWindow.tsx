import React, { useEffect } from 'react';
import '../card/card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { fetchPhotoById, toggleModalWindow } from '../../../store/fetchPhotoById';

function ModalWindow() {
  const { photo, status, id } = useSelector((state: RootState) => state.photoById);

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleModalWindow());
  };

  useEffect(() => {
    dispatch(fetchPhotoById(id));
  }, [dispatch, id]);

  return (
    <>
      {status === 'loading' && (
        <div className="modal_window_wrapper">
          <div className="modal_window_container">
            <div className="modal_window_loading">LOADING...</div>
            <div className="modal_window_close_button" onClick={toggle}>
              X
            </div>
          </div>
          <div className="modal_window_background" onClick={toggle}></div>
        </div>
      )}
      {status === 'resolved' && (
        <div className="modal_window_wrapper">
          <div className="modal_window_container">
            <div className="modal_window_image_wrapper">
              <img className="modal_window_image" src={photo?.urls.small} alt="" />
            </div>
            <ul className="modal_window_description_wrapper">
              <li className="modal_window_description_item">
                <span className="modal_window_description_item_bold">Name: </span>
                {photo?.user.name}
              </li>
              {photo?.user.location && (
                <li className="modal_window_description_item">
                  <span className="modal_window_description_item_bold">Location: </span>{' '}
                  {photo?.user.location}
                </li>
              )}
              {photo?.description && (
                <li className="modal_window_description_item">
                  <span className="modal_window_description_item_bold">Description: </span>
                  {photo?.description}
                </li>
              )}
              <li className="modal_window_description_item">
                <span className="modal_window_description_item_bold">Size: </span>
                {photo?.width}x{photo?.height}
              </li>
              <li className="modal_window_description_item">
                <span className="modal_window_description_item_bold">Likes: </span>
                {photo?.likes}
              </li>
            </ul>
            <div className="modal_window_close_button" onClick={toggle}>
              X
            </div>
          </div>
          <div className="modal_window_background" onClick={toggle}></div>
        </div>
      )}
    </>
  );
}

export default ModalWindow;
