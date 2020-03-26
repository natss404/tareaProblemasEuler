let n=600851475143;

for(let i=2;i<n; i++)
{
    while(n % i==0)
    {
        n=n/i;

    }   

}
console.log(n);