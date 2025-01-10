// function bmi(weight, height) {
//     let bodyMassIndex = weight / height**2;
//     if (bodyMassIndex > 30) {
//         return "Obese"
//     } else if (bodyMassIndex <= 30 && bodyMassIndex > 25) {
//         return "Overweight"
//     } else if (bodyMassIndex <= 25 && bodyMassIndex > 18.5) {
//         return "Normal"
//     } else {
//         return "Underweight"
//     }
// };

// function findSmallestInt(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }

//     }
//     return min;
// }



let arr = ["hay", "junk", "hay", "hay", "moreJunk", "pippo", "needle", "randomJunk"];

function findNeedle(haystack) {
  let needle =  haystack.findIndex(el => el === "needle");
    if (needle !== -1) {
      return 'Find the needle at position ' + `${needle + 1}`;
    }else{
      return `Needle not found`;
    }
  }

  console.log(findNeedle(arr));
  
