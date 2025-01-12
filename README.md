# Subtle Bug in Arithmetic Function

This repository demonstrates a subtle bug in a simple JavaScript arithmetic function and its solution.

## The Bug
The `foo` function aims to add two numbers, handling cases where one or both inputs might be zero. However, the current implementation has a minor flaw in its handling of the edge case where both `a` and `b` are zero.  The function returns 0 immediately without further processing.  Depending on the context this might result in unexpected behaviour.

## The Solution
The solution file provides a corrected implementation that addresses the edge case more robustly. 

## How to Run
1. Clone the repository.
2. Open the `bug.js` file to see the original, problematic code.
3. Open the `bugSolution.js` to see the corrected code.
4. Run the files in a JavaScript environment (e.g., Node.js) to observe the output for various inputs, including the 0,0 case.