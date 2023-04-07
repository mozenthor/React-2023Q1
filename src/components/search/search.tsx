import React, { useEffect, useRef, useState } from 'react';
import './search.scss';

function Search() {
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

  return (
    <input
      className="search_input"
      type="text"
      placeholder="search.."
      value={value}
      onChange={handleChangeValue}
    ></input>
  );
}

export default Search;
