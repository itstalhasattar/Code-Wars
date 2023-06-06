// Sum Numbers
function sum (numbers) {
    
    let result = Number.parseInt(0);
  
    for (let num in numbers) {
      result  = result + numbers[num]
      
    }
    return result
};