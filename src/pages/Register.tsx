import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; 


const Register: React.FC = () => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const navigate = useNavigate();
  
	const handleSubmit = async (e: React.FormEvent) => {
	  e.preventDefault();
	  if (password !== confirmPassword) {
		alert("Hasła muszą się zgadzać");
		return;
	  }
  
	  try {
		const response = await axios.post(
		  "https://psinder-backend.onrender.com/api/users/register",
		  { username, email, password }
		);
		console.log("Rejestracja udana:", response);
		navigate("/login");
	  } catch (error) {
		if (axios.isAxiosError(error)) {
		  console.error("Błąd rejestracji", error.response?.data);
		  alert("Błąd rejestracji: " + error.response?.data?.message || "Spróbuj ponownie później.");
		} else {
		  console.error("Nieoczekiwany błąd", error);
		  alert("Wystąpił błąd. Spróbuj ponownie.");
		}
	  }
	};
  
	return (
	  <div className="flex justify-center items-center min-h-screen bg-gray-100">
		<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
		  <h2 className="text-2xl font-bold text-center mb-6">Zarejestruj się</h2>
		  <form onSubmit={handleSubmit}>
			<div className="mb-4">
			  <label
				htmlFor="username"
				className="block text-sm font-medium text-gray-700"
			  >
				Nazwa użytkownika
			  </label>
			  <input
				type="text"
				id="username"
				className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				placeholder="Wprowadź nazwę użytkownika"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			  />
			</div>
			<div className="mb-4">
			  <label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700"
			  >
				Email
			  </label>
			  <input
				type="email"
				id="email"
				className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				placeholder="Wprowadź email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			  />
			</div>
			<div className="mb-4">
			  <label
				htmlFor="password"
				className="block text-sm font-medium text-gray-700"
			  >
				Hasło
			  </label>
			  <input
				type="password"
				id="password"
				className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				placeholder="Wprowadź hasło"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			  />
			</div>
			<div className="mb-6">
			  <label
				htmlFor="confirmPassword"
				className="block text-sm font-medium text-gray-700"
			  >
				Potwierdź hasło
			  </label>
			  <input
				type="password"
				id="confirmPassword"
				className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				placeholder="Potwierdź hasło"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				required
			  />
			</div>
			<button
			  type="submit"
			  className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			>
			  Zarejestruj się
			</button>
		  </form>
		  <p className="mt-4 text-center text-sm text-gray-600">
			Masz już konto?{" "}
			<a href="/login" className="text-indigo-600 hover:underline">
			  Zaloguj się
			</a>
		  </p>
		</div>
	  </div>
	);
  };
  
  export default Register;
  