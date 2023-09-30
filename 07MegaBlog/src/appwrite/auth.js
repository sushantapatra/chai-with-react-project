import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
	client = new Client();
	account;
	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.account = new Account(this.client);
	}
	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				//call another method (login)
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			console.error("Appwrite service :: createAccount :: error  ", error);
			throw error;
		}
	}
	async login({ email, password }) {
		try {
			return await this.account.createEmailSession(email, password);
		} catch (error) {
			console.error("Appwrite service :: login :: error  ", error);
			throw error;
		}
	}
	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.error("Appwrite service :: getCurrentUser :: error  ", error);
			throw error;
		}
		return null;
	}
	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			console.error("Appwrite service :: logout :: error  ", error);
			throw error;
		}
	}
}

const authService = new AuthService();
export default authService;
