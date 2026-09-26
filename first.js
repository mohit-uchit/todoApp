/* 
1. Start
2. First wale ko highest maan liya
3. Next marks dekhuga
4. Kya ye highest marks se bada 
   - yes -> Highest value
   - no -> ignore kruga
5. Next student marks
6. Sab students k marks compare ni hojate
7. Highest Marks 
*/

// const marks = [8, 3, 12, 5, 1, 9];
// let min = marks[0];

// for(let i = 1; i < marks.length; i++){
//     if(marks[i] < min){
//       min = marks[i]
//     }
// }

// console.log(min)


// minimum
/**
 * [8, 3, 12, 5, 1, 9]
 * Find Minimum
 * Alogrithm =>
    1. Start
    2. First wale ko minimum maan liya
    3. Next marks dekhuga
    4. Kya ye minimum marks se bada 
      - yes -> minimum value
      - no -> ignore kruga
    5. Next student marks
    6. Sab students k marks compare ni hojate
    7. minimum Marks 
 */

[10, 25, 7, 90, 32, 45, 71, 12, 100, 4]
// 1 -> min
// 5 -> max

// 10


// n elements - n checks

// n = input size

// Big O -> O(n) -> worst case scenario
// O(1) -> best case scenario

// 1 crore -> num[0] -> O(1) -> constant time

// Time ,Space



// O(1) -> constant time complexity
const arr = [10, 25, 7, 90, 32, 45, 71, 12, 100, 4]

// O(n^2) -> grows very fast -> quadratic
const test = () => {
  // O(n2)
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }
  }
  //O(n)
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] < min) {
      min = marks[i]
    }
  }
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] < min) {
      min = marks[i]
    }
  }
  // O(1)
  arr[0]
}


// O(1) + O(n) + O(n^2) -> O(n^2)

// 1 + n + n2

// n = 10000        
// n2 = 100000000
// n3 = 1000000000000
// O(x) = 1000100010000