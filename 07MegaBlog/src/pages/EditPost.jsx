import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import blogService from "../appwrite/blogConfig";
import { useParams, useNavigate } from "react-router-dom";
const EditPost = () => {
	const [post, setPost] = useState(null);
	const { slug } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (slug) {
			blogService
				.getPost(slug)
				.then((post) => setPost(post))
				.catch((error) => console.error(error));
		} else {
			navigate("/");
		}
	}, [slug, navigate]);

	return post ? (
		<div className="py-8">
			<Container>
				<PostForm post={post} />
			</Container>
		</div>
	) : null;
};

export default EditPost;
