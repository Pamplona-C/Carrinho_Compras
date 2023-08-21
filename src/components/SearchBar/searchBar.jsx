import React from 'react';
import {LuSearch} from 'react-icons/lu';
import './searchBar.css';
import { useState } from 'react';
import fetchProducts from '../../api/fetchProducts';

function SearchBar(){

	const [input, setInput] = useState('');

	const handleSearch = async (event) => {
		event.preventDefault();

		const products = await fetchProducts(input);
		console.log(products);
		setInput('');
		
	};

	return(
		<form className="search-bar" onSubmit={handleSearch}>
			<input type="search"
				value={input}
				placeholder="Buscar produtos..."
				className="search_input"
				onChange={ (e) => setInput(e.target.value)}
				required
			/>
			<button type="submit" className="search_button" >
				<LuSearch/>
			</button>
		</form>
	);
}

export default SearchBar;
