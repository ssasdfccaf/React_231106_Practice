import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
//import data from "../../data.json";
import axios from "axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// & - 현재 요소를 나타냄
const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    & {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        axios.get("/blog/list")
            .then((response) => setData(response.data))
            .catch(error => console.log(error));
    }, []);  

    const searchData = () => {
        axios.get(`/blog/searchList?searchText=${searchText}`)
            .then((response) => setData(response.data))
            .catch(error => console.log(error));
    }

    return (
        <Wrapper>
            <Container>
                <div>
                    <input value={searchText} onChange={e => setSearchText(e.target.value)} />
                    <button onClick={searchData}>Search</button>
                </div>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.idx}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;