import config from "../conf/config";
import { Client, Databases, Storage, ID } from "appwrite";

export class BlogService {
	client = new Client();
	databases;
	storage;
	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.storage = new Storage(this.client);
	}
	async createPost({ title, slug, content, featuredimage, status, userid }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{ title, content, featuredimage, status, userid }
			);
		} catch (error) {
			console.error("Appwrite Service :: createPost :: error  ", error);
			throw error;
		}
	}
	async updatePost(slug, { title, content, featuredimage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{ title, content, featuredimage, status }
			);
		} catch (error) {
			console.error("Appwrite Service :: updatePost :: error  ", error);
			throw error;
		}
	}
	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
	//file upload method
	async uploadFile(fileBlob) {
		try {
			return await this.storage.createFile(
				config.appwriteBucketId,
				ID.unique(),
				fileBlob
			);
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
	async updateFile(fileId) {
		try {
			return await this.storage.updateFile(config.appwriteBucketId, fileId);
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
	getFilePreview(fileId) {
		try {
			return fileId
				? this.storage.getFilePreview(config.appwriteBucketId, fileId)
				: false;
		} catch (error) {
			console.error("Appwrite Service :: getFilePreview :: error  ", error);
			//throw error;
			return false;
		}
	}
	async deleteFile(fileId) {
		try {
			await this.storage.deleteFile(config.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.error("Appwrite Service :: deletePost :: error  ", error);
			//throw error;
			return false;
		}
	}
}

const blogService = new BlogService();
export default blogService;
