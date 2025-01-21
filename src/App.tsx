import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
// import Home from "./pages/HomeTemplate";
// import DogDetailsTemplate from "./pages/DogDetailsTemplate";
// import ActivityTemplate from "./pages/ActivityTemplate";
// import NewPairAndMessageTemplate from "./pages/NewPairTemplate";
// import Home from "./pages/HomeTemplate";
// import AllPairsTemplate from "./pages/AllPairsTemplate";
// import DogList from "./components/DogsList/DogList";
import DogSwiper from "./components/DogsList/DogSwiper";

// Komponent ochrony trasy
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const { token } = useAuth(); // Sprawdzamy, czy użytkownik ma token

	// Jeśli użytkownik nie jest zalogowany, przekierowujemy na stronę logowania
	if (!token) {
		return <Navigate to='/login' />;
	}

	return children;
};

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<DogSwiper/>
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
