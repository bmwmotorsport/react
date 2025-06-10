import { useContext } from "react"
import { Fname } from "./App";
import {Lname} from './App';

export default function C2() {
    const fn = useContext(Fname);
    const ln = useContext(Lname);

    return(
        <div>
        <span>{fn}</span>
        <span>{ln}</span>
        </div>
    );

}