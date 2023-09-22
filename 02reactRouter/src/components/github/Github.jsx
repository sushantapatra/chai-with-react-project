import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
	const data = useLoaderData();

	//const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/sushantapatra")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);
	// console.table(data);
	return (
		<div className="text-center m-5 bg-gray-500 text-white p-4 text-3xl">
			Github Followers :{data.followers}
			<img src={data.avatar_url} alt="Git Profile Picture" width={300} />
		</div>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/sushantapatra");
	return response.json();
};
