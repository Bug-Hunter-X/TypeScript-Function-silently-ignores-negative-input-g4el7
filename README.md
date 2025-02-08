# TypeScript Function silently ignores negative input

This repository demonstrates a subtle bug in a TypeScript function that silently ignores negative input instead of throwing an error or handling the case appropriately. 

## Bug Description
The `printNumbers` function is designed to print numbers from 1 to `n`.  However, when a negative number is provided as input, it does not produce an error; it simply does nothing.  This is a non-obvious bug because there is no runtime exception. 

## How to reproduce
1. Clone the repository.
2. Compile and run the `bug.ts` file (using TypeScript compiler).
3. Observe the behavior when calling `printNumbers` with both positive and negative numbers.

## Solution
The solution involves adding explicit error handling or input validation to handle the negative input scenario.