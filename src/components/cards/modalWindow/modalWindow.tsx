import { useEffect, useState } from 'react';
import { api } from '../cardsWrapper';
import React from 'react';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import '../card/card.scss';

function ModalWindow(props: { id: string; toggleModalWindow: () => void }) {
  const [data, setData] = useState<ApiResponse<Full> | null>(null);

  useEffect(() => {
    setData(null);
    api.photos
      .get({
        photoId: props.id,
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  if (!data) {
    return (
      <div className="modal_window_wrapper">
        <div className="modal_window_container">
          <div className="modal_window_loading">LOADING...</div>
        </div>
        <div className="modal_window_background"></div>
      </div>
    );
  }

  return (
    <div className="modal_window_wrapper">
      <div className="modal_window_container">
        <div className="modal_window_image_wrapper">
          <img className="modal_window_image" src={data.response?.urls.small} alt="" />
        </div>
        <ul className="modal_window_description_wrapper">
          <li className="modal_window_description_item">
            <span className="modal_window_description_item_bold">Name: </span>
            {data.response?.user.name}
          </li>
          {data.response?.user.location && (
            <li className="modal_window_description_item">
              <span className="modal_window_description_item_bold">Location: </span>{' '}
              {data.response?.user.location}
            </li>
          )}
          {data.response?.description && (
            <li className="modal_window_description_item">
              <span className="modal_window_description_item_bold">Description: </span>
              {data.response?.description}
            </li>
          )}
          <li className="modal_window_description_item">
            <span className="modal_window_description_item_bold">Size: </span>
            {data.response?.width}x{data.response?.height}
          </li>
          <li className="modal_window_description_item">
            <span className="modal_window_description_item_bold">Likes: </span>
            {data.response?.likes}
          </li>
        </ul>
        <div className="modal_window_close_button" onClick={props.toggleModalWindow}>
          X
        </div>
      </div>
      <div className="modal_window_background" onClick={props.toggleModalWindow}></div>
    </div>
  );
}

export default ModalWindow;
