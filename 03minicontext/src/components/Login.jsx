import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};
	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				name="password"
				id="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
		</div>
	);
};

export default Login;