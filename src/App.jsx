import './App.css'

import {useReducer, useRef, createContext} from "react";

import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용입니다."
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용입니다."
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case 'DELETE':
            return state.filter((item) => String(item.id) !== String(action.id));
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content
            }
        });
    }

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content
            }
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        });
    };

    return (
        <>
            <button onClick={() => {
                onCreate(new Date().getTime(), 1, "test");
            }}>추가 테스트 버튼
            </button>
            <button onClick={() => {
                onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
            }}>수정 테스트 버튼
            </button>
            <button onClick={() => {
                onDelete(2);
            }}>삭제 테스트 버튼
            </button>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate, onUpdate, onDelete
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App
