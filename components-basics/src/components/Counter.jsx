import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(count + 1);
    };

    const clearCounterHandler = () => {
        setCount(0);
    }

    if (count < 0) {
        return (
            <h3>Invalid count!</h3>
        )
    }

    return (
        <div>
            <h1>Counter</h1>

            <p>Counter: {count }</p>
            <button onClick={()=> setCount (count - 1)}>-</button>
            <button onClick={incrementClickHandler}>+</button>
            <button onClick={clearCounterHandler}>clear</button>
        </div>
    )
}