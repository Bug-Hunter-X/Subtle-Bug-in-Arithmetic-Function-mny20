function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is problematic
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(0, 0)); // Output: 0
console.log(foo(1, 0)); // Output: 1
console.log(foo(0, 1)); // Output: 1
console.log(foo(1, 1)); // Output: 2