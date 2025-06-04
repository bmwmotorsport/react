import { useState } from "react";

function Uimg() {
    const [myImg, setImg] = useState("f1celeb.jfif");

    function changeImg() {
        if (myImg == "f1celeb.jfif") {
            setImg("logo192.png");
        } else {
            setImg('f1celeb.jfif');
        }
    }

    return (
        <div>
            <img src={myImg} alt="Dynamic" width="200" /> <br />
            <button onClick={changeImg}>Change Image</button>
        </div>
    );
}

export default Uimg;
