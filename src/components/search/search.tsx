import React, { useEffect, useState } from 'react';
import './search.scss';
import { AppDispatch, RootState } from 'store';
import { setSearchValue } from '../../store/searchValueSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../store/fetchPhotosSlice';

function Search() {
  const searchValue = useSelector((state: RootState) => state.searchValue.searchValue);
  const [value, setValue] = useState(searchValue);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnt') {
      dispatch(setSearchValue({ searchValue: value }));
    }
  };

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchPhotos({ searchValue: searchValue }));
    }
  }, [dispatch, searchValue]);

  return (
    <>
      <input
        className="search_input"
        type="text"
        placeholder="search.."
        value={value}
        onChange={handleChangeValue}
        onKeyDown={keyPressHandler}
      ></input>
    </>
  );
}

export default Search;
