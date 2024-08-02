import "./DiaryItem.css"
import {getEmotionImage} from "../util/get-emotion-image.js";
import Button from "./Button.jsx";

const DiaryItem = () => {
    const emotionId = 2;

    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(2)}/>
            </div>
            <div className="info_secion">
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">
                    일기 내용
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"}/>
            </div>
        </div>
    );
};

export default DiaryItem;