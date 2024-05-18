async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

module.exports = { getProducts };
