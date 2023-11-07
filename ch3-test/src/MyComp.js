import React from "react";
import PropTypes from "prop-types";

// 자식 컴포넌트 : 부모 컴포넌트로부터 전달받은 props라는 속성 이용
const MyComp = (props) => {
  const { name, password, children } = props;

  return (
    <div>
      <h1>
        테스트 props props 라는 객체 안의 속성들 중에서 name 이름 받아오기 :{" "}
        {props.name}
      </h1>

      <h1>
        테스트 props 객체 안의 속성들 중에서 password 받아오기 :{" "}
        {props.password}
      </h1>
      <h1>
        테스트 props 객체 안의 속성들 중에서 children 받아오기 :{" "}
        {props.children}
      </h1>
    </div>
  );
};

// props 기본값 정하기
// MyComp.defaultProps = {
//   name: "기본 이름",
//   password: "기본 1234",
// };

// props 타입 확인
MyComp.propTypes = {
  // 기본값 타입 , not null 존재 반드시 확인하기

  // 어떤 props?  존재 여부, 타입 확인이 가능 -> 공식 문서 참고
  name: PropTypes.string.isRequired,
  password: PropTypes.string,
};

export default MyComp;
