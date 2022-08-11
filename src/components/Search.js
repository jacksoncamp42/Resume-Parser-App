import React from 'react';
import { useState } from 'react';
import './search.css';
import SearchFrame from './sidebar-icons/SearchFrame.png';

export default function Search() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="search-container">
      <div className="logo">
        <h1>Search for Resumes</h1>
        <div className="shape"> </div>
        <img className="search-icon" src={SearchFrame} alt="search-logo" />
      </div>

      <form className="search-section" onSubmit={handleSubmit}>
        <div className="search-input">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search a skill or keyword"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Search Resumes
        </button>
      </form>
    </div>
  );
}
