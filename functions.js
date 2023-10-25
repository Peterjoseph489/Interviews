// write me a function that prints Fibonacci sequence for nth number.


function generateFibonacci(n) {
    if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
      console.log("Please provide a positive whole number.");
      return;
    }
  
    let sequence = [0, 1];
    if (n === 1) {
      console.log("Fibonacci Sequence:", sequence[0]);
    } else if (n >= 2) {
      for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      console.log("Fibonacci Sequence:", sequence.join(', '));
    }
}
  
// Example usage:
generateFibonacci(10); // Prints the Fibonacci sequence up to the 10th number.


function characterFrequency(str) {
    if (typeof str !== 'string') {
      console.log("Please provide a valid string.");
      return;
    }
  
    const frequencyMap = {};
    for (const char of str) {
      if (frequencyMap[char]) {
        frequencyMap[char]++;
      } else {
        frequencyMap[char] = 1;
      }
    }
  
    console.log("Character Frequency:");
    for (const char in frequencyMap) {
      console.log(`'${char}': ${frequencyMap[char]}`);
    }
  }
  
// Example usage:
characterFrequency("Hello, world!"); // Counts and prints character frequency.
