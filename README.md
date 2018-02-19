# bigint.js
### Big Integer Library v. 5.5
* based on original by Leemon Baird (www.leemon.com)

# Installing
## Browser
```html
  <script src="bigint.js"></script>
```
## Node.js
### https://www.npmjs.com/package/bigintjs
```bash
  npm install math-bigint --save
```
## Source
```bash
  git clone https://github.com/TimothyMeadows/bigintjs
```
# Methods
#### bigInt  add(x,y)
> return (x+y) for bigInts x and y.

#### bigInt  addInt(x,n)
> return (x+n) where x is a bigInt and n is an integer.

#### string  bigInt2str(x,base)
> return a string form of bigInt x in a given base, with 2 <= base <= 95

#### int     bitSize(x)
> return how many bits long the bigInt x is, not counting leading zeros

#### bigInt  dup(x)
> return a copy of bigInt x

#### boolean equals(x,y)
> is the bigInt x equal to the bigint y?

#### boolean equalsInt(x,y)         
> is bigint x equal to integer y?

#### bigInt  expand(x,n)            
> return a copy of x with at least n elements, adding leading zeros if needed

#### Array   findPrimes(n)          
> return array of all primes less than integer n

#### bigInt  GCD(x,y)               
> return greatest common divisor of bigInts x and y (each with same number of elements).

#### boolean greater(x,y)           
> is x>y?  (x and y are nonnegative bigInts)

#### boolean greaterShift(x,y,shift)
> is (x <<(shift*bpe)) > y?

#### bigInt  int2bigInt(t,n,m)      
> return a bigInt equal to integer t, with at least n bits and m array elements

#### bigInt  inverseMod(x,n)        
> return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null

#### int     inverseModInt(x,n)     
> return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse

#### boolean isZero(x)              
> is the bigInt x equal to zero?

#### boolean millerRabin(x,b)       
> does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)

#### boolean millerRabinInt(x,b)    
> does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)

#### bigInt  mod(x,n)               
> return a new bigInt equal to (x mod n) for bigInts x and n.

#### int     modInt(x,n)            
> return x mod n for bigInt x and integer n.

#### bigInt  mult(x,y)              
> return x*y for bigInts x and y. This is faster when y<x.

#### bigInt  multMod(x,y,n)         
> return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.

#### boolean negative(x)            
> is bigInt x negative?

#### bigInt  powMod(x,y,n)          
> return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.

#### bigInt  randBigInt(n,s)        
> return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.

#### bigInt  randTruePrime(k)       
> return a new, random, k-bit, true prime bigInt using Maurer's algorithm.

#### bigInt  randProbPrime(k)       
> return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).

#### bigInt  str2bigInt(s,b,n,m)    
> return a bigInt for number represented in string s in base b with at least n bits and m array elements

#### bigInt  sub(x,y)               
> return (x-y) for bigInts x and y.  Negative answers will be 2s complement

#### bigInt  trim(x,k)              
> return a copy of x with exactly k leading zero elements
