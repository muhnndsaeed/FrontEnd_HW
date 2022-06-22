function numberSum(N) {
        total = 0;
      for(i = 1; i <= N; i++){
        total += i;
      }
      console.log(` The sum number of ${N} Is ${total} `)   
  }

 numberSum(5)

 

 function sumEven(N) {
     total = 0;
      for(i = 1; i <= N; i++){
        if ( i % 2 == 0){
            total += i;
        }
            
      }
      console.log(` The sum even number of ${N} Is ${total} `)
  }
sumEven(5)