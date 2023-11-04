import { useState } from 'react';

export default function Counter(props) {
    const [counter, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter</h1>

            <p>Counter: { }</p>
            <button onClick={}>+</button>
        </div>
    )
}