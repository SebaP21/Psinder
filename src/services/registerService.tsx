import axios from "axios";

const registerUser = async (
	email: string,
	password: string,
	username: string
) => {
	try {
		const response = await axios.post(
			"https://psinder-backend.onrender.com/api/users/register",
			{
				email,
				password,
				username,
			}
		);

		return response.data; // Możesz zwrócić dane użytkownika
	} catch (error) {
		console.error("Registration failed:", error);
		throw error;
	}
};

export default registerUser;
