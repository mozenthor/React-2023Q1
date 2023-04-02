import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './search.scss';

interface ISearchValue {
  setSearchValue?: Dispatch<SetStateAction<string>>;
}

function Search({ setSearchValue }: ISearchValue) {
  const [value, setValue] = useState(localStorage.getItem('search') || '');
  const searchRef = useRef(value);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    searchRef.current = event.target.value;
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current);
    };
  }, []);

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (setSearchValue && (event.code === 'Enter' || event.code === 'NumpadEnt')) {
      setSearchValue(value);
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
