// Basic math functions
function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    return x / y;
  }
  
  // Additional functions
  function increment(m) {
    return m + 1;
  }
  
  function decrement(m) {
    return m - 1;
  }
  
  function makeInt(m) {
    return parseInt(m, 10);
  }
  
  function preserveDecimal(m) {
    return parseFloat(m);
  }
  
  // Test cases
  console.log(add(1, 80)); // Output: 81
  console.log(subtract(60, 40)); // Output: 20
  console.log(multiply(2, 3.4)); // Output: 6.8
  console.log(divide(5.0, 2.5)); // Output: 2