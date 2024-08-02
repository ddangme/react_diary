import './App.css'

import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary" element={<Diary/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    );
}

export default App
