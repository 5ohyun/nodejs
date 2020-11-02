//3rd party module = package
// <1> 다운받는 방법 - npmjs.com 사이트에서 검색, search
// <2> 사용하는 방법

// <1> 
// express package-> 서버의 request 처리하기 쉽고, 사용하기 쉬움, 안전
// npm install readline-sync 시에 node modules 폴더 만들어짐
// 이 폴더에는 다운받았던 패키지들이 모두 다운로드됨
// package-lock.json : 버전 관리
// package.json : 다운받은 패키지들 목록

const readline = require("readline-sync");
const name = readline.question("what is your name ? \n")
console.log(name);