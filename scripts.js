// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// The forEach method iterate over the names and provinces arrays and log each element to the console
names.forEach((firstName) => console.log(firstName));
provinces.forEach((province) => console.log(province));

/* 
 The forEach it iterate over the names array, but it logs each first name along with the corresponding
 province from the provinces array using the index
 */
names.forEach((firstName, index) =>
  console.log(`${firstName} (${provinces[index]})`)
);

// Using map method to create a new array provincesUppercase with all the province names converted to uppercase
const provincesUppercase = provinces.map((province) => province.toUpperCase());
console.log(provincesUppercase);

// map method to create a new array nameLength containing the lengths of each first name
const nameLength = names.map((firstName) => firstName.length);
console.log(nameLength);

// logs a sorted version of the provinces array to the console using the sort method
console.log(provinces.sort());

// The filter method is used to create a new array filterOutCape that contains only provinces that do not include the word "Cape"
const filterOutCape = provinces.filter(
  (provinces) => !provinces.includes(`Cape`)
);
console.log(filterOutCape.length);

/*
  Used some method to check if any first name in the names array contains the letter "S".
  If at least one name contains "S", it logs an array of booleans indicating which names contain ""
 */
const containAnyS = names.some((firstName) => firstName.includes(`S`));
if (containAnyS) {
  console.log(names.map((firstName) => firstName.includes(`S`)));
}

/* 
  used the reduce method to create an object nameObj where the keys are the first names from the names array,
  and the values are the corresponding provinces from the provinces array.
 */
const nameObj = names.reduce((obj, key, index) => {
  obj[key] = provinces[index];
  return obj;
}, {});

console.log(nameObj);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  /*
  Log Products - Maps over the products array and returns a new array with only the product property values
  */
  products.map((name) => name.product),

  /* 
  Filter by Name Length - Filters the products array to include only products product has a length of 5 or less,
  and then maps over the filtered array to return a new array with only the product property values
  */
  products
    .filter((name) => name.product.length <= 5)
    .map((name) => name.product),

  /*
  Price Manipulation - Filters the products array to include only products price is a non-empty string or a number, 
  then maps over the filtered array and converts the price property of each object to an integer using parseInt, 
  and adds all the prices using the reduce method
  */
  products
    .filter(
      (product) =>
        (typeof product.price === "string" && product.price.trim() !== "") ||
        typeof product.price === "number"
    )
    .map((product) => parseInt(product.price))
    .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0),

  /* 
  Concatenate Product Names - it Concatenates the product property of each object in the products array to a single string using the reduce method
  */
  products.reduce((productNames, product) => {
    return productNames.concat(product.product);
  }, ``),

  /* Find Extremes in Prices
  Finds the highest and lowest prices in the products array using the reduce method.
  It initializes an object with highest and lowest properties set to undefined,
  and then updates these properties with the maximum and minimum values of the price property, respectively.
  */
  products.reduce(
    (results, product) => {
      const price = parseInt(product.price);
      if (!isNaN(price)) {
        results.Highest = Math.max(results.Highest || -Infinity, price);
        results.Lowest = Math.min(results.Lowest || Infinity, price);
      }
      return results;
    },
    { Highest: undefined, Lowest: undefined }
  ),

  /*
  Object Transformation - Transforms the products array into a new array of objects with name and cost properties using the reduce method. 
  The name property is set to the product property value, and the cost property is set to the price property value
  */
  Object.entries(products).reduce(
    (accumulator, [index, { product, price }]) => {
      accumulator[index] = { name: product, cost: price };
      return accumulator;
    },
    []
  )
);
