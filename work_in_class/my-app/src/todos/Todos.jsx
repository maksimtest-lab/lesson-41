import { useState, useEffect } from 'react';
import Todo from './components/todo.jsx';
import Item from '../Item.jsx';

export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('useEffect');
        console.log('isItemVisible', isVisible);
    }, [isVisible]);

    const handleChangeTodo = (event) => {
        const { value } = event.target;
        setTodo(value);
    }

    const addTodo = () => {
        setTodos((prevState) => [...prevState, {id: Math.round(Math.random() * 1000), title: todo}]);
        setTodo('');
    }

    const deleteTodo = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }


    return (
        <div>
            <h2>Список дел:</h2>
            <input
                type="text"
                placeholder="Введите новую задачу"
                name='todo'
                value={todo}
                onChange={handleChangeTodo}
            />

            <button onClick={addTodo}>Добавить</button>
            <div>
                <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
            </div>

            {isVisible && <Item />}

            <ul>
                {todos.map((todo, index) => (
                    <Todo key={todo.id} title={todo.title} id={todo.id} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    )
}