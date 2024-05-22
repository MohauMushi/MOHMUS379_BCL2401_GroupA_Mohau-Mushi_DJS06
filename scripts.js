// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((firstName) => console.log(firstName));

names.forEach((firstName, index) => console.log(`${firstName} (${provinces[index]})`));

provinces.map((province) => console.log(province.toUpperCase()));

names.map((firstName) => console.log(firstName.length))

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