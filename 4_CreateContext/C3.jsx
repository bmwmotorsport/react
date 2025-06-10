import { useContext } from "react";
import { Fname } from "./App";
import { Lname } from "./App";
function C3(){
    const value1 = parseInt(useContext(Fname));
    const value2 = parseInt(useContext(Lname));
    return(<span>{value1}*{value2}={value1*value2}</span>)
}
export default C3