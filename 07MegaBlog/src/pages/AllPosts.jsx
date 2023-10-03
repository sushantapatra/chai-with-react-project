import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import blogService from "../appwrite/blogConfig";
const AllPosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		blogService
			.getPosts([])
			.then((posts) => {
				if (posts) {
					setPosts(posts.documents);
				}
			})
			.catch((error) => console.error(error.message));
	}, []);
	return (
		<div className="w-full py-8">
			<Container>
				<div className="flex flex-wrap">
					{posts.map((post) => (
						<div key={post.$id} className="p-2 w-1/4">
							<PostCard {...post} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default AllPosts;
