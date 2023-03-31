import React, { useEffect, useState } from 'react';
import './search.scss';

function Search() {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('search', value);
  }, [value]);

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
