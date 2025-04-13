import React, { useMemo, useState } from 'react'

export const MemoHook = () => {

    const [value , setValue] =useState("")
    const [theme , toggleTheme] = useState(false) ;

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

      const darkTheme = theme ? 'bg-gray-300' : 'bg-white'  

    //   const primeNumber = findNthPrime(value)

     const primeNumber = useMemo(()=>  findNthPrime(value) , [value])

  return (
    <>
    <div className={` min-h-screen ${darkTheme}`}>
    <h1>learning useMemo hook</h1>
    <input type="number" value={value}
    onChange={(e)=>{setValue(e.target.value)}} />
    <div>
        {value} th prime number is : {primeNumber}
    </div>

    <button onClick={()=>{toggleTheme(!theme)}}>toglle the theme</button>

    </div>
    </>
  )
}
