import React from 'react';
import {LuSearch} from 'react-icons/lu';
import './searchBar.css';
import { useState } from 'react';

function SearchBar(){

	const [input, setInput] = useState('');

	return(
		<form className="search-bar">
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
