import React from 'react';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import './cartButton.css';
//import { useState } from 'react';

//https://api.mercadolibre.com/sites/MLB/search?q=

function CartButton(){

	//const [] = useState('');

	return(
		<button type="button" className="cart_button">
			<HiOutlineShoppingCart/>
			<span className="cart_status">1</span>
		</button>
	);
}

export default CartButton;
