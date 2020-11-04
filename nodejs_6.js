// JSON
// javascript object notation
// 자바 스크립트는 파일로 저장하지만 , 실제로 front back 에서 주고 받을 때
// string 으로 만든 후 , 서버로 보내서 다시 json으로 만듦

// 서버, 클라이언트에서 필수적
// Array, {} 으로 데이터 사용

const fs = require('fs'); // file과 관련된 라이브러리
const data = fs.readFileSync("./number.json",{encoding:"utf-8"});
console.log(typeof(data)); // string (object가 아니므로 json으로 변경해줘야 함)
console.log(typeof JSON.parse(data));  // data가 색도 다르게 나옴
// JSON.parse (string -> object)
// JSON.stringify (object -> string)

let arr = JSON.parse(data);
console.log(arr[2]); // 3출력 

let ob = {
    name : "Daniel",
    age : 20,
    description : "I go to school.",
}; // json 파일 형식에 맞게 

fs.writeFileSync("test.json", JSON.stringify(ob, null, 2)); // json 파일 만들기 -> [object Object] 로만 뜸
// stringify 로 json을 string으로 변경해 저장 필요
// stringify(ob, null, 2) 로 줄바꿈 실행







