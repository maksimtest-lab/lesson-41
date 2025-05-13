export default function Todo({ title, id, deleteTodo }) {

    const handleDelete = () => {
        deleteTodo(id);
    }

    return (
        <li>
            <h2>{title}</h2>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}