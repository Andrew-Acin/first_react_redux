import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeOne, clearTodo } from "./features/todoSlice";

function Todo() {
    const items = useSelector((state) => state.todo.items);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add List Item</button>
            </form>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => dispatch(removeOne(index))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
