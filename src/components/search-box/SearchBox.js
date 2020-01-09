import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchField, onChange }) => {
    return (
        <div className="form">
            <input
                placeholder="Search Field"
                className="form__input"
                value={searchField}
                name="searchField"
                id="searchField"
                type='search'
                onChange={(event) => onChange(event)}
            />
            <label className="form__label" htmlFor="searchField">
                Search Field
            </label>
            >
        </div>
    );
};

export default SearchBox;
