// function falsyOrTruthy(elem1, elem2){
//     return !elem1? elem1:elem2
//     if (!elem1){
//         return elem1
//     }

//     else{
//         return elem2
//     }
// }
// console.log(falsyOrTruthy(2,5))

/* */

// function arrLength(list){
//     return list.length
// }

// console.log(arrLength([1,2,3,4,3,5,4]))

/* */

// function lastElem(arr){
//     return arr[arr.length-1]
// }

// console.log(lastElem([2,5,6,9]))

/* */
// function arrSum(arr){
//     let sum = 0
//     for (i=0; i<arr.length; ++i)    
//         sum = sum + arr[i]

//     return sum
// }

// console.log(arrSum([2,3,4,342,34,3]))

/* */
// function progressiveSum(num){
//     sum = 0
//     for (i = 0; i <= num ; ++i)
//         sum = sum + i 
    
//     return sum
// }   

// console.log(progressiveSum(3))
/* */

// function calcTime(seconds){
//     let timerMinutes = Math.floor(seconds/60)
//     let timerSeconds = seconds%60

//     if(timerMinutes.toString().length === 1){
//         timerMinutes = '0' + timerMinutes
//     }

//     if (timerSeconds.toString().length ===1){
//         timerSeconds = '0' +timerSeconds
//     }

//     return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(66))

/* */

// function getMax(arr){
//     max = arr[0]
//     for (i=1; i<arr.length; i++){
//         if (max <= arr[i]){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(getMax([3,3,-3]))

/* */
// Reverse word decreasing for loop

// function reverseString(str){
//     letter = str[str.length-1]
//     for (i=str.length -2; i >= 0 ; i--){
//         letter = letter + str[i]
//     }
//     return letter
// }

// console.log(reverseString('google'))

/* */
// increasing for loop

// function reverseString(str){
//     let reversedString = '';
//     for (i=0; i < str.length; i++){
//         reversedString = str[i] + reversedString
//     }
//     return reversedString;
// }

// console.log(reverseString('google'))

/* */
// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('abc'))

/* */ 
// function convertToZeros(arr){
//     convert = []
//     for(i=0; i<arr.length; i++){
//         arr[i] = 0
//         convert.push(arr[0])
//     }
//     return convert
// }
// console.log(convertToZeros([1,2,3,434,3423,3]))


/* */

// function convertToZeros(arr){
//     return arr.map(elem => elem*0)
// }
// console.log(convertToZeros([1,2,3]))

/* */

// function convertToZeros(arr){
//     return new Array(arr.length).fill(0)
// }
// console.log(convertToZeros([1,2,3]))

/* */

// function removeApples(arr){
//     newArr = []
//     for (i = 0; i<arr.length; i++){
//         if (arr[i] !== 'apples'){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeApples(['banana', 'orange','apples']))

/* */
// function removeApples(arr){
//     return arr.filter((elem) => elem !== 'apples')
// }

// console.log(removeApples(['banana', 'orange','apples']))

/* */

// function filterOutFalsy(arr){
//     newArr = []
//     for(i=0; i<arr.length; i++){
//         if (!!arr[i]=== true){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(filterOutFalsy(["",[],0,null,undefined,"0"]))

/* */

// function filterOutFalsy(arr){
//     return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy(["",[],0,null,undefined,"0"]))

/* */
// function convertToBoolean(arr){
//     boolArr = []
//     for(i=0; i<arr.length; i++){
//         if(!!arr[i] === false){
//             boolArr.push(false)
//         }
//         else{
//             boolArr.push(true)
//         }
//     }
//     return boolArr
// }
// console.log(convertToBoolean([500, 0, "David", '',[]]))

/* */
// function convertToBoolean(arr){
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, "David", '',[]]))

