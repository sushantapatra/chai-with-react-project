import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// property ur function
		//function ke andar do chisseo ka access hamesa miltahai (state, action)
		//state => hame initial state ka value milata hai
		//action => value pass karo ur action se get karate hain
		addTodo: (state, action) => {
			console.log(action);
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id == action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
