import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Importujemy useAuth
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>(""); // Przechowujemy email
	const [password, setPassword] = useState<string>(""); // Przechowujemy hasło
	const { login } = useAuth(); // Używamy login z AuthContext, który zaktualizuje dane użytkownika i token
	const navigate = useNavigate(); // Do nawigacji po zalogowaniu

	// Funkcja obsługująca formularz logowania
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Zapobiegamy domyślnej akcji formularza
		try {
			// Wykonujemy zapytanie do backendu
			const response = await axios.post(
				"https://psinder-backend.onrender.com/api/users/login",
				{
					email,
					password,
				}
			);

			// Jeśli logowanie się powiedzie, ustawiamy dane użytkownika i token w kontekście
			login(response.data.user, response.data.token);

			// Po zalogowaniu przekierowujemy użytkownika do strony głównej
			navigate("/home");
		} catch (error) {
			console.error("Błąd logowania", error); // Obsługa błędów
		}
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-center bg-cover'
    style={{
      backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
    }}
    >
			<div className='bg-black bg-opacity-80  p-8 rounded-lg shadow-lg w-full max-w-sm'>
				<h2 className='text-2xl font-bold text-center mb-6'>Zaloguj się</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
							placeholder='Wprowadź email'
							value={email}
							onChange={(e) => setEmail(e.target.value)} // Zmieniamy stan emaila
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-700'
						>
							Hasło
						</label>
						<input
							type='password'
							id='password'
							className='mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
							placeholder='Wprowadź hasło'
							value={password}
							onChange={(e) => setPassword(e.target.value)} // Zmieniamy stan hasła
							required
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					>
						Zaloguj się
					</button>
				</form>
				<p className='mt-4 text-center text-sm text-gray-600'>
					Nie masz konta?{" "}
					<a
						href='/register'
						className='text-indigo-600 hover:underline'
					>
						Zarejestruj się
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
