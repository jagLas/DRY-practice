function multiplyBiggerNumByTwo(num1, num2) {
  return bigSmallSelect(num1, num2, 'big') * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return bigSmallSelect(num1, num2, 'big') / 3;
}

function eatMostTacos(sum1, sum2) {
  let most = bigSmallSelect(sum1, sum2, 'big')
  return `I ate ${most} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = bigSmallSelect(weight1, weight2, 'small');
  return `I adopted a dog that weighs ${smallDog} pounds.`;

}

function bigSmallSelect(num1, num2, size) {
  if (size != 'big' && size != 'small') {
    throw 'Third argument must be either "big" or "small"'
  }

  let big;
  let small;
  
  if(num1 > num2){
    big = num1;
    small = num2;
  } else {
    big = num2;
    small = num1;
  }

  if (size === 'big') {
    return big;
  } else {
    return small;
  }
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};