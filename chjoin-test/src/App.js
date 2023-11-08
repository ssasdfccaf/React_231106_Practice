import logo from "./logo.svg";
import "./App.css";
// 자식 컴포넌트 요소
import Join from "./component/Join";
import Main from "./component/Main";
import MyCount from "./component/Count";
import { Button, Space, DatePicker, version } from "antd";
import Routes;

// 페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComp from '../../ch3-test/src/MyComp';

function App() {
  return (
    // 페이지 이동을 위한 설정 2 전체 요소를 BrowserRouter로 감싸기 - 구성요소는 Routes -> Route


    <BrowserRouter>
    <Routes>
      {/* 메인으로 사용할(index => 주소에서 :/) 페이지를 App 또는 Main.js */}

     <Route index element={<Main/>}/>
     주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>{"}"}

     <Route path="join" element={<Join/>}/>
     <Route path="mycount" element={<MyCount/>}/>
    </Routes>
}
    </BrowserRouter>
  )
    
    {/*antd 튜토리얼 샘플 가져오기 테스트 */}


//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Join />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


// ch4  내용과 비교하기