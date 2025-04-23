import React, { useMemo, useState } from 'react';

// Prime number finder
const findNthPrime = (n) => {
  if (n < 1) return 0;
  const primes = [2];
  let num = 3;

  while (primes.length < n) {
    let isPrime = true;
    const sqrt = Math.sqrt(num);
    for (let i = 0; i < primes.length && primes[i] <= sqrt; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    num += 2;
  }

  return primes[n - 1];
};

const Memo = () => {
   
  const [inputValue, setInputValue] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const boxColor = darkTheme ? 'bg-gray-300' : 'bg-white';
  const nthPrime = useMemo(() => findNthPrime(Number(inputValue)), [inputValue]);

//   const nthPrime = findNthPrime(Number(inputValue)) 

  return (
    <div className="min-h-screen p-4">
      <h1 className="mb-4">Learning useMemo Hook</h1>
      <div className={`max-w-md mx-auto border p-2 ${boxColor}`}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full mb-2 p-1 border"
        />
        <div className="mb-2">
          nth prime number: {nthPrime}
        </div>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Memo;
