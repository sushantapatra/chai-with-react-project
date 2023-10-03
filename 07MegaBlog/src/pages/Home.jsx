import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import blogService from "../appwrite/blogConfig";
import { Link } from "react-router-dom";

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		blogService
			.getPosts([])
			.then((posts) => setPosts(posts.documents))
			.catch((error) => console.error(error.message));
	}, []);

	if (posts.length > 0) {
		return (
			<div className="w-full py-8">
				<Container>
					<div className="flex flex-wrap">
						{posts.map((post) => (
							<div key={post.$id} className="p-2 w-1/4">
								<PostCard post={post} />
							</div>
						))}
					</div>
				</Container>
			</div>
		);
	} else {
		return (
			<div className="w-full py-8 mt-4 text-center">
				<Container>
					<div className="flex flex-wrap">
						<h1 className="text-2xl font-bold hover:text-gray-500">
							<Link to="/login">Login to read posts </Link>
						</h1>
					</div>
				</Container>
			</div>
		);
	}
};

export default Home;
