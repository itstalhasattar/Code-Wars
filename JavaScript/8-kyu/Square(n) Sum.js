// Solution 1
function squareSum(number){
  let total = 0
  for (let item =0; item < number.length; item += 1){
      console.log(number[item])
    total  += (number[item] * number[item])
  }
  return total
}


// Solution 2
function squareSum(numbers) {
    const squaredNumbers = numbers.map(number => number * number);
    const total = squaredNumbers.reduce((sum, num) => sum + num, 0);
    return total;
  }