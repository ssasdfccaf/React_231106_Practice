// 화살표 함수와 일반 함수와의 차이점 확인
// ex1 ) setTimeout 함수를 기준으로 확인

// es6 화살표 함수로 바로 자동 완성

// 매개변수1 - 콜백 함수
// 매개변수2 - 특정 시간, ms 300ms -> 3초
// 특정 시간 후, 콜백 함수 동작

setTimeout(function test() {
  console.log("일반 함수 테스트 setTimeout");
}, 2000);

// 차이점 : 일반 함수, 화살표 함수 가리키는 this의 영향

// 일반함수 this 확인
function testDog() {
  this.name = "멍멍이";
  return {
    name: "멍멍이2",
    // 일반 함수로 사용 완료, 화살표 함수로 확인할 예정
    sound: function () {
      console.log(this.name + ": 멍멍!!!");
    },
  };
}

// 실행 테스트
// const testdog = new testDog();
// testDog.sound();

// 결론 : 일반함수는 this 의 영향권이 자신이 종속된 객체를 가리킴

/* 화살표 함수 */
// testDog2
function testDog2() {
  this.name = "멍멍이";
  return {
    name: "멍멍이2",
    // 일반 함수로 사용했고, 비교군, 화살표 함수로 확인 할 예정.
    sound: () => console.log(this.name + ": 멍멍!!!"), // 멍멍이: 멍멍!!!
  };
}

// 실행 테스트
const testdog2 = new testDog2();
testDog2.sound();

// 결론 : 화살표 함수는 this 의 영향권이 자신이 종속된 인스턴스를 가리킴
