import React, { Dispatch, SetStateAction, useState } from 'react';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

interface ISetStateFunction {
  setStateFunction?: Dispatch<SetStateAction<string>>;
}

function Search({ setStateFunction }: ISetStateFunction) {
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const [value, setValue] = useState(searchValue);
  const dispatch = useDispatch();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch({ type: 'setSearchValue', searchValue: event.target.value });
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (setStateFunction && (event.code === 'Enter' || event.code === 'NumpadEnt')) {
      setStateFunction(value);
    }
  };

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
