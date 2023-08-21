import React, {useState, useEffect} from 'react';
import './products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../productCard/productCard';
import Loading from '../loading/loading';


function Products(){

	const [products, setproducts] = useState([]);
	const [load, setLoad] = useState(true);

	useEffect(() => {
		fetchProducts('notebook').then((response) => {

			setproducts(response);
			setLoad(false);

		});
	}, []);

	return(

		(load ? <Loading/> : 
			<section className="products container">
				{
					products.map((product) => <ProductCard key={product.id} data={product}/>)
				}
			</section>)


		
	);
}

export default Products;
