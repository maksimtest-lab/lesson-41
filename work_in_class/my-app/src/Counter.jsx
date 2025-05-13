import { userRef } from 'react';

export default function Counter({ count, setCount }) {
    let ref = userRef(0);

    const handleClick = (event) => {
        ref.current = +1;

        console.log('Счетчик:', count);
        console.log('Кликнули по кнопке', event);
    }

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}