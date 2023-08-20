import React, {useState, useEffect} from 'react';
import './products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../productCard/productCard';


function Products(){

	const [products, setproducts] = useState([]);

	useEffect(() => {
		fetchProducts('notebook').then((response) => {

			setproducts(response);

		});
	}, []);

	return(
		<section className="products container">
			
			{
				products.map((product) => <ProductCard key={product.id} data={product}/>)
			}


		</section>
	);
}

export default Products;
