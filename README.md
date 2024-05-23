# DJS06: Higher Order Functions

### Project Overview
This project focuses on deepening understanding of JavaScript's array methods, including forEach, map, filter, and reduce. These methods are used to manipulate data and perform various tasks, encouraging a declarative approach to programming. By applying these methods in combination, the project aims to test the ability to solve complex problems and achieve desired outcomes in a more readable, concise, and maintainable manner. Additionally, the project emphasizes the creation of pure functions and avoidance of side effects, aligning with the principles of functional programming.

### Data Sets
You will work with two primary datasets:

1. A list of provinces:
```javascript
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
```
2. A list of names:
```javascript
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
```
3. A list of products with prices:
```javascript
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
```

#### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)
For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.
2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

## Breakdown of the logic behind the code implementations:

1. **forEach Method**:
- The forEach method is used to iterate over the names and provinces arrays and log each element to the console.
- Additionally, it iterates over the names array and logs each first name along with the corresponding province from the provinces array using the index.
2. **map Method**:
- The map method is to create a new array provincesUppercase with all the province names converted to uppercase.
- Another map method is used to create a new array nameLength containing the lengths of each first name.
3. **sort Method**:
- The sort method is utilized to log a sorted version of the provinces array to the console.
4. **filter Method**:
- The filter method is used to create a new array filterOutCape that contains only provinces that do not include the word "Cape".
5. **some and reduce Methods**:
- The some method is used to check if any first name in the names array contains the letter "S". If at least one name contains "S", it logs an array of booleans indicating which names contain "S".
- The reduce method is employed to create an object nameObj where the keys are the first names from the names array, and the values are the corresponding provinces from the provinces array.

Advanced Exercises (Single `console.log` Execution)
1. **Log Products**:
- The map method is used to create a new array with only the product property values from the products array.
2. **Filter by Name Length**:
- The filter method is first used to include only products with a product length of 5 or less.
Then, the map method is applied to return a new array with only the product property values from the filtered array.
3. **Price Manipulation**:
- The filter method is used to include only products with a non-empty string or a number as the price.
The map method is then used to convert the price property of each object to an integer using parseInt.
Finally, the reduce method is employed to add all the prices together.
4. **Concatenate Product Names**:
- The reduce method is used to concatenate the product property of each object in the products array to a single string.
5. **Find Extremes in Prices**:
- The reduce method is utilized to find the highest and lowest prices in the products array. It initializes an object with Highest and Lowest properties set to undefined, and then updates these properties with the maximum and minimum values of the price property, respectively.
6. **Object Transformation**:
- The reduce method is used to transform the products array into a new array of objects with name and cost properties. The name property is set to the product property value, and the cost property is set to the price property value.

### Challenges Faced

While working on this project, some of the challenges I encountered included:

- Understanding the nuances of each array method and when to apply them effectively.
- Ensuring the correct usage of array methods in combination to achieve the desired outcomes.
- Handling edge cases and unexpected data scenarios when applying array methods.
- Grasping the concept of pure functions and avoiding side effects in the context of array manipulation.

Overall, these challenges provided valuable learning experiences and opportunities to enhance my proficiency in using JavaScript's array methods effectively.

### 📚 What I Learnt
I learned about the practical application of JavaScript's array methods, including forEach, map, filter, and reduce, to manipulate and transform data. These methods were used to iterate over arrays, create new arrays with transformed data, perform sorting and filtering, and aggregate data to create new objects. Through the exercises, I gained a deeper understanding of how to effectively use these array methods to achieve specific outcomes, such as logging elements, transforming data, and performing complex data manipulations