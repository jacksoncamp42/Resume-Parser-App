import React from 'react';
import { useState } from 'react';
import './search.css';
import SearchFrame from './sidebar-icons/SearchFrame.png';

export default function Search(props) {
  function handleChange(event) {
    props.onChange(event.target.value);
  }
  const handleSubmit = (event) => {
    props.onSubmit(event);
  };

  return (
    <div className="search-container">
      <div className="logo">
        <h1 className="search-text">
          Search for <br />
          <mark>resumes</mark>
        </h1>
        <img className="search-icon" src={SearchFrame} alt="search-logo" />
      </div>

      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </span>
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Search a skill or keyword"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Search Resumes
          </button>
        </form>
      </div>
    </div>
  );
}
