import { createContext, useContext } from "react";

export const TodoContext = createContext({
	todos: [
		{ id: 1, todo: "Todo Message", completed: false },
		{ id: 2, todo: "Todo Message new", completed: false },
	],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleComplete: (id) => {},
});
export const TodoProvidor = TodoContext.Provider;

export const useTodo = () => {
	return useContext(TodoContext);
};
