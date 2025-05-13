import { useEffect, useState, useRef } from 'react';
import './Users.sass'

export default function Users() {
    const [users, setUser] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const userTitleRef = useRef(null);

    useEffect(() => {
        if (isAdmin) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                    userTitleRef.current.classList.add('active');
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });

        } else {
            setUser([]);
            userTitleRef.current.classList.remove('active');
        }
    }, [isAdmin]);

    return (
        <div className='users'>
            <h1 className='users__title' ref={userTitleRef}>Users</h1>
            <p className='users__text'>This is the users page.</p>
            <button className='users__button' onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>

            <p>This is the users page.</p>
            {users.length > 0 ? (
                <ul className='users__list'>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}