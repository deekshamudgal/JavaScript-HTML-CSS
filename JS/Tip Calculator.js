function sum(a,b){
  //return makes a function reusabale
  return a+b
}

function calculateFoodTotal(food,tip){
tipPercent=tip/100
tipAmount=food*tipPercent
totalAmount=sum(food,tipAmount)
return totalAmount
}

console.log(calculateFoodTotal(100,20))
