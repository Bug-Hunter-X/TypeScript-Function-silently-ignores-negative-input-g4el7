function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error("Input must be a positive integer.");
  } 
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

//Example
printNumbers(5);
//This will throw an error
//printNumbers(-5); 