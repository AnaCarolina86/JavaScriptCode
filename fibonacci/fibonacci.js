function fibonacciGenerator (n) {
        var fib = []; //array 
    
        if(n == 1){
          fib.push(0);
        }
        else if (n == 2){
          for(let i=0; i<n; i++){
            fib[i] = i
          }
        }
        else{
          fib = [0, 1];
          for(let i = 1; i<n-1; i++){
            fib[i+1] = fib[i] + fib[i-1];
          }
    
        }    
        
        return fib;   
        //Return an array of fibonacci numbers starting from 0.
}