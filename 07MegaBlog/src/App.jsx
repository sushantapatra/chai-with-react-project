import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
				} else {
					dispatch(logout());
				}
			})
			.catch((e) => {
				console.error(e.message);
				setLoading(false);
			})
			.finally(() => setLoading(false));
	}, []);

	return !loading ? (
		<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
			<div className="w-full block">
				<Header />
				<main>
					{/* <Outlet/> react router dom */}
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	) : (
		<div>
			<h1>Login faild</h1>
		</div>
	);
}

export default App;
