/* Main 임시 페이지 */
import React from "react";
// yarn add react-router-dom
// npm install react-router-dom 라우팅 모듈, 도구 설치
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

// styled-component : 컴포넌트에서 css 작업하는 모듈
// yarn add styled-components
// npm install styled-components
// 확장팩 : styled-components
import styled from "styled-components"; // 설치 후, 모듈 가져와서 사용
import { Component } from "react";

// styled.원하는 태그 선택
// 백틱(`)으로 속성 추가
const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: aqua;
  text-align: center;
`;

// Wrapper : 블록 부분 설정
const Wrapper = styled.div`
  padding: 20px;
  width: calc() (100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Container 만들기
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;

  // & = 현재 태그
  // 해당 div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고 각 요소에 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  // useNavigate 라는 훅스로 페이징
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <div>
          <h1>메인 화면입니다.</h1>

          {/* css 적용하기 */}
          <MainTitleTextCss>styled-components test</MainTitleTextCss>
          <p>styled-Components test</p>

          <MainTextCss>
            <p>2번째 텍스트 효과 확인하기</p>
          </MainTextCss>

          {/*join component로 이동하는 버튼 하나 추가 - 버튼 클릭 시, join으로 이동 */}

          <Button
            title="회원가입 이동"
            type="primary"
            onClick={() => {
              navigate("/join");
            }}
          ></Button>

          <Button
            title="mycount 이동"
            type="primary"
            onClick={() => {
              navigate("/mycount");
            }}
          ></Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Main;
