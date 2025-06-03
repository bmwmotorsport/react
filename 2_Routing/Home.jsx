import About from "./About";

export default function Home(){
    return(
        <div>
            <h1>Wellcome Here. . .</h1>
            <img src="f1celeb.jfif" alt="" /> <br />
            <button oneClick={About}>About</button>
        </div>
    )
}