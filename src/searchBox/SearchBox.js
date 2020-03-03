import React from 'react';

const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<input
			type='search'
			className='search-field'
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
};

export default SearchBox;
