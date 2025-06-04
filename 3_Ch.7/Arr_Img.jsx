import { useState } from "react"

export default function A_Img() {
    const arr = ["f1celeb.jfif","logo192.png","f1celeb.jfif","logo192.png","f1celeb.jfif"]
    const [myImg, setImg] = useState(arr[0])

    function changeImg() {
        const idx = Math.floor(Math.random() * arr.length);
        setImg(arr[idx]);
    }

    return (
    <div>   
    <img src={myImg}/>
    <button onClick={changeImg}>click</button>
    </div>
  )
}