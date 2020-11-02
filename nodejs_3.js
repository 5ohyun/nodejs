//file system --> 불러오거나 쓸 때
//node js --> 컴퓨터 안의 파일들을 건드릴 수 있음
//javascript --> 컴퓨터 안의 파일들을 건드릴 수 없음


//Sync
//function

const fs = require('fs');

// file 작성, sync
fs.writeFileSync("./hello.txt","Hello, everyone"); 

// file 읽기 , buffer로 값이 불러와짐 , encoding 거쳐서 변환
const data = fs.readFileSync("./hello.txt", {encoding:"utf-8"}); 
console.log(data);

// file 에 덧붙이기, 항상 앞에 \n 붙이기
const data = fs.appendFileSync("./hello.txt", "\nWelcome!");

// 현재 디렉토리의 파일들 가져오기
list = fs.readdirSync(".");
console.log(list);