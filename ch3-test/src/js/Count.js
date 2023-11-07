/* state test 자식 컴포넌트 */

// 클래스형 컴포넌트 구조 참고 - 구현부는 거의 동일
// rcc

import React, { Component } from "react";

class count extends Component {
  // props 전달용 : Component 부모 클래스 초기화 같이 진행
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      number: 0,
      anotherNumber: 0,
    };
  }
  render() {
    // 비구조화 할당
    const { number, anotherNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>다른 숫자 : {anotherNumber} </h2>
        <button
          //onClick값으로 함수 사용
          onClick={() => {
            this.setState({ number: number + 1 }); // 해당 숫자의 변수 값 변경 : 증가
            // 한번 클릭 시, 값이 2개씩 증가하도록 설정 -> 문제점(:동작 여부) 확인 => 해결책 : 객체 대신 함수로 대체
            this.setState({ number: this.state.number + 1 });

            // 해결책
            this.setState((previousState) => {
              return {
                number: previousState.number + 1,
              };
              // state 값 변경 후, 특정 함수 호출하기
              () => {
            console.log("state 값 변경 후, 함수 호출 완료")
              }
            );
          }}
        >
          +1{" "}
        </button>

        <button
          onClick={() => {
            this.setState({ number: number - 1 }); // 해당 숫자의 변수 값 변경 : 감소
          }}
        >
          {" "}
          -1{" "}
        </button>
      </div>
    );
  }
}

export default count;
