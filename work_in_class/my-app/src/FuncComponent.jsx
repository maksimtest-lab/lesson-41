import { useState } from 'react';

export default function FuncComponent() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: 'Ilya', age: 20 });

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    const handleChangeUser = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }

    return (
        <div>
            <h1>FuncComponent Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h2>Имя: {user.name}</h2>
            <h2>Возраст: {user.age}</h2>
            <input type="text" value={user.name} onChange={handleChangeUser} name='name'/>
            <input type="text" value={user.age} onChange={handleChangeUser} name='age'/>

        </div>
    );
}