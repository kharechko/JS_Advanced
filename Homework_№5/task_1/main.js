function sum() {
  let count = 0;
  return function(number) {
       console.log(count += number)
     }
   }
   
let total = sum();

total(3)
total(5)
total(25)