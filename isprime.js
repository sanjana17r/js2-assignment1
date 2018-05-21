function isprime(n)
{
    var i,count=0;//two variables i and count is involved,initially count is set to 0.
    for(i=2;i<n;i++) //i is incremented until i<n, so in the for loop,the divisibility of the given number is checked with all numbers between 2 and the number itself 
  {                      
      if(n%i===0)
     {
        count++; //only if any one of the numbers is divisible with the given number,count gets incremented,else it remains zero
     }
   }
  if(count===0) //if no number was divisible with the given number,count remains 0.
      {             //so, if the variable count is zero,it implies that it is a prime number.
         return true; //so,if it is primenumber it returns true
      }
    return false;    //if its not primenumber it returns false.
}

console.log(isprime(98)); //here false is returned
console.log(isprime(97)); //here true is returned
