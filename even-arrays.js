var numbers = [10,20,15,25];

function findEvens(numbers) {
    return numbers.filter(function(n){
        return n % 2 == 0 ;
    });
}

console.log(findEvens(numbers));