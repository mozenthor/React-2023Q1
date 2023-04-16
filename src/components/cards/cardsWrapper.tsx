import React, { useEffect, useState } from 'react';
import './cardsWrapper.scss';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import Card from './card/card';

export const api = createApi({ accessKey: 'OzgE6QPO7RH3oq2108ldsgvWdER1bK8dRajf5L5OXa0' });

function CardsWrapper(props: { searchValue: string }) {
  const [data, setData] = useState<ApiResponse<Photos> | null>(null);

  const getApiData = (searchValue: string) => {
    setData(null);
    api.search
      .getPhotos({
        query: searchValue,
        page: 1,
        perPage: 10,
        orientation: 'portrait',
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApiData(props.searchValue);
  }, [props.searchValue]);

  useEffect(() => {
    setData(data);
  }, [data]);

  if (!data) {
    return <h3>LOADING...</h3>;
  }
  if (data.response?.results.length === 0) {
    return <h3>NOT FOUND</h3>;
  }

  return (
    <div>
      <div className="cards_wrapper">
        {data.response?.results.map((DataElement) => (
          <Card key={DataElement.id} data={DataElement}></Card>
        ))}
      </div>
    </div>
  );
}

export default CardsWrapper;
