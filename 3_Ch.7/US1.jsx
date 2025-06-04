import { useState } from "react";

function US1() {
    const[count, setCount]=useState(0);
    function handleCount() {
        setCount(count + 1);
    }
     function handleCount1() {
        setCount(count - 1);
    }
    return(
        <div>
            <p>You Clicked {count} times.</p>
            <button onClick={handleCount}>increment</button>
            <button onClick={handleCount1}>decrement</button>
        </div>
    )
}

export default US1