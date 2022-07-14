
/* 1-Area of triangle */
function area(a,b,h){
    return 1 / 2 * a + b * h
    }
    const triangle = area(5,6,7);
    console.log(`The area is ${triangle}`);
    
/* 2-negative/positive */

const validate = checker(4, -5);
console.log(validate)

    /* 3-Larger value*/
    function getLagerval(a, b){
        if(a > b){
            return a;
        }else {
            return b;
        }
    }
    let check = getLagerval(2,10);
    console.log(check);
    
    /* 4-Even or odd*/
    function evenorodd (){
        for(let i = 0; i <= 15; i++){
            if(i % 2 === 0){
                console.log(`${i}-even`)
            }else{
                console.log(`${i}-odd`);
            }
        }
    }
    
    evenorodd();