
function isEvenNumber(number){
 return number % 2 ==0;
}

function toEvenNumber(number){
    if(isEvenNumber(number)){
        return number;
    }
    return number + 1;
}

function toOddNumber(number){
    if(isEvenNumber(number)){
        return number + 1;
    }
    return number;
}


function sum(n){
  let result = 0;
  let i = 1;
  while(i < n){
    result = result + i;
    i = i + 1;
  }
  return result;
}

let a = sum(10);
let b = sum(100000);

function sumN(n){
    let result = 0;
    let i = 1;
    while(1 <= n){
    if(i > 0){

    }
    else(i < 0){

    }
    }

function sumN(number){
    if(number >= 1){
        return sum(number)
  }
        let result = 0;
        let i = number;
        while(i <= n){
        result = result + i;
        i = i + 1;
  }
  return result;
  }


function sumN(number){
    if(number >= 1){
        start = 1;
        end = number;
    }else{
        start = number;
        end = 1;
    }
     let result = 0;
     let i = start;
        while(i <= end){
        result = result + i;
        i = i + 1;
  }
}


 引数より小さな整数をすべて出す
