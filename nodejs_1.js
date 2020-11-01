// node js 실행하는 법 --> java script0
console.log('hi'); // 출력 문법 , undefined 를 반환

// npm 무료 패키지 매니저
// npm init --> package.json 만듦

// module --> library

const add = require('./add') // 모듈 불러올 때 경로 설정 꼭 해줘야함
const result = add(1,2);

const mult = require('./mult')
const result2 = mult(5,10);

// console.log(result2);

const stat = require('./stat')
console.log(stat.pi);
console.log(stat.mean([1,2,3,4,5]))