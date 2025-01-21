import axios from "axios";

const loginUser = async (email: string, password: string) => {
	try {
		const response = await axios.post(
			"https://psinder-backend.onrender.com/api/users/login",
			{
				email,
				password,
			}
		);

		// Jeśli login jest udany, zapisujemy token w localStorage
		if (response.data.token) {
			localStorage.setItem("token", response.data.token);
		}

		return response.data; // Możesz zwrócić dane użytkownika i token
	} catch (error) {
		console.error("Login failed:", error);
		throw error;
	}
};

export default loginUser;
