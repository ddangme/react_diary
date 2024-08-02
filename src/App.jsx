import './App.css'

import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

import {getEmotionImage} from "./util/get-emotion-image.js";

function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav('/new');
    }
    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"} />}
                rightChild={<Button text={"right"} />}
            />
            <Button
                text={"123"}
                onClick={() => {
                    console.log("버튼이 클릭되었습니다.");
                }}
                type={"POSITIVE"}
            />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    );
}

export default App
