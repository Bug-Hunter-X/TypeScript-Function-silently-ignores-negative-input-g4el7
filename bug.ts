function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work fine
printNumbers(-5); // This will not print anything, but it should throw an error or at least print nothing