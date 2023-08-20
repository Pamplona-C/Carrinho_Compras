import React from 'react';
import SearchBar from '../SearchBar/searchBar';
import './header.css';
import '../cartButton/cartButton';
import CartButton from '../cartButton/cartButton';

function Header(){
  
	return(
		<header className="header">
			<div className="container" >
        
				<SearchBar />
				<CartButton />

			</div>
		</header>
	);
}

export default Header;
