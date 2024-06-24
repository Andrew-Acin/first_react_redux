import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeOne: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearTodo: (state) => {
            state.items = [];
        },
    },
});


export const {addTodo, removeOne, clearTodo} = todoSlice.actions

export default todoSlice.reducer