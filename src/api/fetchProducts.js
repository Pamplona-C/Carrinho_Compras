// Função para buscar produtos na API do Mercado Livre
async function fetchProducts(query) {
	// Monta a URL para buscar produtos com base na consulta
	const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  
	// Faz a busca dos produtos usando a URL montada
	const response = await fetch(apiUrl);
  
	// Converte a resposta da API em um formato mais fácil de usar
	const responseData = await response.json();
  
	// Retorna a lista de produtos encontrados
	return responseData.results;
}

// Torna a função fetchProducts disponível para outros arquivos
export default fetchProducts;
