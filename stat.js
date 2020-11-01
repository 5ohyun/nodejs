const pi = 3.14;
const mean = (arr) => { // 배열을 받음??
    if(arr.length === 0 ){
        return 0;
    }

    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
};

// exports 하는 방법 4가지
//(1) add.js 에서 처럼 module.exports = add; 상수 지정해 exports
//(2-1)
// module.exports = {
//     // pi:pi,
//     // mean:mean
// (2-2)
//     pi,
//     mean
// }

//(3)
module.exports.pi = pi;
module.exports.mean = mean;
// exports.mean = mean; 도 됨

//(4) 바로 exports 하기
// exports.pi = 3.14;
// exports.mean = arr => { // 배열을 받음??
//     if(arr.length === 0 ){
//         return 0;
//     }

//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };