// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((firstName) => console.log(firstName));
provinces.forEach((province) => console.log(province));

names.forEach((firstName, index) => console.log(`${firstName} (${provinces[index]})`));

const provincesUppercase = provinces.map((province) => province.toUpperCase());
console.log(provincesUppercase);

const nameLength = names.map((firstName) => firstName.length);
console.log(nameLength);

console.log(provinces.sort())

const filterOutCape = provinces.filter(provinces => !provinces.includes(`Cape`));
console.log(filterOutCape);

const containAnyS = names.some(firstName => firstName.toLowerCase().includes(`s`));
if (containAnyS) {
  console.log(names.map(firstName => firstName.toLowerCase().includes(`s`)));
}

const nameObj = names.reduce((obj, key, index) => {
  obj[key] = provinces[index];
  return obj;
}, {});

console.log(nameObj);

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(
  // Log Products
  products.map(name => name.product),

  // Filter by Name Length
  products.filter(name => name.product.length <= 5).map(name => name.product),

  // Price Manipulation
  products
  .filter(product => (typeof product.price === 'string' && product.price.trim() !== '') || (typeof product.price === 'number'))
  .map(product => parseInt(product.price))
  .reduce((total, currentPrice) => total + currentPrice, 0), 

  // Concatenate Product Names
  products.reduce((productNames, product) => {
    return productNames.concat(product.product);
  }, ``),

  // Find Extremes in Prices
  products.reduce((results, product) =>{
    const price = parseInt(product.price);
    if(price){
      results.Highest = Math.max(results.Highest || 0, price);
    }
    if(price){
      results.Lowest = Math.min(results.Lowest || Infinity, price);
    }
    return results;
  }, {Highest: undefined, Lowest: undefined}),

  // Object Transformation
  Object.entries(products).reduce((acc, [index, { product, price }]) => {
    acc[index] = { name: product, cost: price };
    return acc;
  }, []),

);