function* generatePrimeNumbers(max) {
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let index = 2; index <= Math.sqrt(number); index++) { // Start from 2
      if (number % index === 0) return false; 
    }
    return true; 
  }

  for (let a = 2; a <= max; a++) {
    if (isPrime(a)) {
      yield a; // Yield the prime number
    }
  }
}


const limit = 50;
const primeNumbers = generatePrimeNumbers(limit);

for (const prime of primeNumbers) {
  console.log(prime);
}
