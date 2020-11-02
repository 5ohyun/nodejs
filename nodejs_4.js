const fs = require('fs');

// data = fs.readFileSync("./hello.txt",{encoding:"utf-8"});
// console.log(data);

// data = fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });

// 동기 < synchronous = block > VS 비동기 < asynchronous non-block >
// synch -> 순서대로 
// async -> 불러와지는 중에 불러와지고 async 시간을 줄일 수 있다. 자바스크립트 callback 등을 async -> sync

// let text = "default";
// data = fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
//     console.log(data); // hello (순서 2)
//     text = data;
// });
// console.log(text); // default (순서 1)

let startTime = Date.now(); // 시작하는 시간 받아오기
let text = "default";
setTimeout(()=> {
    console.log(Date.now()-startTime,"First"); // 5초 뒤에 실행
},5000);
console.log(Date.now()-startTime,"Second"); // 먼저 실행됨








// node