import React from 'react';
import PropTypes from 'prop-types'; 
import { BiCartAdd } from 'react-icons/bi';
import './productCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
	const { title, price, thumbnail } = data;

	return (
		<section className="product_card">
			<img
				src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
				alt="product"
				className="card_img"
			/>

			<div className="card_infos">
				<h2 className="card_price">{formatCurrency(price,'BRL')}</h2>
				<h2 className="card_title">{title}</h2>
			</div>

			<button type="button" className="button_add-cart">
				<BiCartAdd size={'20px'} />
			</button>
		</section>
	);
}

export default ProductCard;

ProductCard.propTypes = {
	data: PropTypes.shape({}),
}.isRequired;
