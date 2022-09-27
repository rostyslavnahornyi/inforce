export const getProducts = `
query getProducts($query: String!) {
	products(query: $query) {
	  id,
	  name,
	  imageUrl
	}
  }
`;


