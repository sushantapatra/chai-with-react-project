import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet /> {/* https://reactrouter.com/en/main/components/outlet */}
			<Footer />
		</>
	);
};

export default Layout;
