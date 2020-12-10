import React from 'react'
import './searchBox.css'

const SearchBox = ({ onChange, onSubmit }) => {
    return (
        <div className='search-box-container'>
            <input 
                className='search-box'
                type='search'
                placeholder='Type your city'
                onChange={onChange}
                onKeyDown={onSubmit}
                            
            />
        </div>
    );
};

export default SearchBox;