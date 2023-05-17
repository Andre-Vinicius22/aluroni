import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "pages/menu";
import Home from "pages/Home";
import NavMenu from "components/NavMenu";
import DefaultPage from "components/DefaultPage";

export default function AppRouter() {
	return (
		<main>
			<Router>
				<NavMenu />
				<Routes>
					<Route path="/" element={<DefaultPage />}>
						<Route index element={<Home />} />
						<Route path="menu" element={<Menu />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
