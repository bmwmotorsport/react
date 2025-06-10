import { useContext } from "react";
import {Fname} from './App';

function Comp() {
    const value = useContext(Fname)
    return <span>{value}</span>
}

export default Comp