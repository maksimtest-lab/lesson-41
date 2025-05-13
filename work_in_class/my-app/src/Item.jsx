import { useEffect, useRef, useState } from 'react';

export default function Item() {
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        const handleResize = () => {
            console.log('Window resized');
        }

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        // when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    const handleFocus = () => {
        // console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.style.borderColor = 'red';
        setValue((prevInput) => prevInput + inputRef.current.value);
    }

    const handleIputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <h2>Item: {inputRef.current?.value}</h2>
            <input type="text" ref={inputRef} onChange={handleIputChange}/>
            <button ref={buttonRef} onClick={handleFocus}>Focus</button>
        </div>
    );
}