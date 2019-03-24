// 내장 객체

// var user = {
//     name:'jack'
// }

// console.log(user.name);

// var user1 = new Object();
// user1.name = 'jack'

// console.log(user1.name);

// function User(name){
//     this.name = name;
// }

// var user2 = new User('jack');

// console.log(user2.name);

// // math
// var result = Math.min(4, 5, 7);
// var result1 = Math.abs(-3);
// console.log(result1);

// Date

// var result = new Date();
// var result = Date.now();

// console.log(result);





// var user = {
//     email:'abc@google.com',
//     name:'홍길동',
//     password:'secret',
//     passwordChangedAt:new Date(),
//     createdAt:new Date(),
//     lastLoginedAt:new Date(),
// }

// console.log(user);

// This (메소드? 함수?)


// function User(name){
//     this.name = name;
//     // console.log(this);
// }

// User.prototype.say = function(){
//     console.log(this);
// }

// var user = new User('jack');

// user.say();


// Call by Value

// function swap (num1, num2){
//     var temp = num1;
//     num1 = num2;
//     num2 = temp;
// }

// var a = 3;
// var b = 7;

// swap(a,b);

// console.log(a)
// console.log(b)


// Call by Reference

// function changePassword(user, newPassword){
//     user.password  = newPassword
// }

// var user = {
//     password:'secret'
// }

// console.log('before ', user)

// changePassword(user,'new secret');

// console.log('after ', user)



// 스코프(유효 범위)

// var a = 7 // 전역 변수

// function test(){
//     var b = 3; //지역 변수
//     console.log(a);
//     console.log(b);
// }

// test();

// console.log(b);


// 실행 컨텍스트



// 배열 뿌수기(초기화, 읽기, 추가, 삭제)


//         0  1  2  3
var arr = [4, 3, 7, 1];

// console.log( arr[2] );

arr.push(80);

// [4, 3, 7, 1, 80]

arr.splice(3,1); // 인덱스가 3부터 1개 삭제 

// [4 3 7 80]

// for(var i =0; i< arr.length; i++){
//     //만약에 아이탬중에 3이 있으면 곱하기 2를 해서 출력하라
//     if(arr[i]===3){
//         console.log(arr[i]*2);
//     }else{
//         console.log(arr[i]);
//     }
// }

// User라는 생성자 함수를 사용해서 name은 jack age는 20인 객체를 만들어 보세요

// name이 jack인 객체를 users안에 넣어보세요 push를 활용해서 

// User라는 생성자 함수를 사용해서 name이 joy이고 age가 21인 객체를 만들고 users안에 넣어보세요

// User라는 생성자 함수를 사용해서 name이 jason이고 age가 26인 객체를 만들고 users안에 넣어보세요

// for문을 사용해서 users에 있는 user들을 출력해 보세요 

// var users = []

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }   

// users.push(new User('jack',20));
// users.push(new User('joy',21));
// users.push(new User('jason',26));

// for(var i =0; i <users.length; i++){
//     // console.log(users[i]);
// }

// var sum = 0;
// var avg = 0;
// // users 안에있는 유저들의 평균 나이를 구하고 출력 하세요 (for문 사용 )
// // 평균은 n개의 값을 다 더한뒤에 n으로 나누면 됩니다.

// for(var i = 0; i<users.length; i++){
//     sum = sum + users[i].age;
// }

// avg = sum / users.length;

// // console.log(avg);

// // users를 사용해서 name이 joy인 user의 나이를 25로 변경하세요 

// console.log(users)

// for(var i =0; i<users.length; i++){
//     if(users[i].name ==='joy'){
//         users[i].age = 25;
//     }
// }
// console.log(users)

// // users안에서 name이 jason인 user를 삭제 해보세요
// // splice(index, count)
// for(var i =0; i<users.length; i++){
//     if(users[i].name ==='jason'){
//         users.splice(i,1);
//     }
// }
// console.log(users);


// Users 추가하고 삭제하고 읽고 수정하기

// HTTP 메소드( Get Post )

// MPA로 웹서비스 만들기

// ///////////////////////////////////////////


// var uuid = require('uuid');

// var users = [];

// //es5
// function User(id, email, name, password){
//     this.id = id;
//     this.email = email;
//     this.name = name;
//     this.password = password;
// }

// // es6 
// // class User{
// //     constructor(id, email, name, password){
// //         this.id = id;
// //         this.email = email;
// //         this.name = name;
// //         this.password = password
// //     }
// // }

// //회원가입 함수
// function signup(email, name, password){
    
//     // 해당 email이 우리 유저인지 확인해주고 만약 있다면 오류를 던져야한다.
//     for(var i =0; i<users.length; i++){
//         if(users[i].email === email){
//             // throw new Error('이미 가입되어 있음');
//             return;
//         }
//     }

//     // uuid 생성  
//     var id = uuid.v1();

//     // 새로운 유저 생성
//     var newUser = new User(id, email, name, password);
    
//     // 저장
//     users.push(newUser);

//     // 회원가입 완료 메일 전송 ...
// }

// //로그인 함수 
// function login(email, password){

//     // user 와 password가 일치하는 유저를 찾는다.

//     // 있으면 유저객체를 리턴한다. (비밀번호 제외)

//     // 없다면 null을 리턴한다.
    
//     for(var i =0; i<users.length; i++){
//         if(users[i].email === email && users[i].password === password){
//             return {
//                 id: users[i].id,
//                 email:users[i].email,
//                 name:users[i].name
//             }
//         }
//     }

//     return null;
// }

// //회원 이름 수정
// function updateName(id, newName){
//     for(var i =0; i<users.length; i++){
//         if(users[i].id === id){
//             users[i].name = newName;
//         }
//     }
// }

// // 초기화
// signup('abc@google.com', 'ingyu', 'secret');
// signup('abb@google.com', 'ingyu', 'secret');

// // abc@google.com 계정의 비밀번호는 secret입니다.
// // abc@google.com 계정의 name을 jack으로 수정해보세요 updateName을 사용해서 
// // 중요!!! email이 아니라 id에요 

// var user = login('abc@google.com','secret');
// updateName(user.id, 'jack');

// console.log(users);


