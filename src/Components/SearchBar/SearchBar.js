import React, { useState } from 'react';

const SearchBar = ({ onFormSearch }) => {
  const [term, setTerm] = useState('');
  // const [name, setName] = useState('');
  const handelChange = (e) => {
    setTerm(e.target.value);
  }
  const handelFormSubmit = e => {
    e.preventDefault();
    onFormSearch(term);
  }
  // const input = useRef();
  // useEffect(() => {

  // });
  return (
    <div className="search-bar ui segment">
      <form onSubmit={handelFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">
            Video Search
          </label>
          <input
            placeholder="Search...."
            type="text"
            name='search'
            onChange={handelChange}
            value={term}
          />
        </div>
      </form>
    </div>
  );
}
export default SearchBar;