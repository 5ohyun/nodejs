//core module --> nodejs.org/api/
// 다운받을 필요없이 바로 사용 가능한 모듈
// --> 이벤트 처리, DNS, 비밀번호 암호화 등 라이브러리 선택

//readline

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin, // 유저의 값 입력값
    output : process.stdout  // terminal에서 보이는 글

});

rl.question("what is your name? ", (answer)=>{ // answer : 콜백 func
    console.log(`Hello ${answer}`);
    console.log("Hello " + answer);

    rl.close(); // 입력 후에 nodejs close
});




