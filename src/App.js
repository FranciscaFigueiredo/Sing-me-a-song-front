import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SongContext } from "./contexts/SongContext";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
	const [currentSong, setCurrentSong] = useState(null);

	return (
		<BrowserRouter>
			<SongContext.Provider value={{ currentSong, setCurrentSong }} >
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<Home /> } />
				</Routes>
			</SongContext.Provider>
		</BrowserRouter>
	);
}
