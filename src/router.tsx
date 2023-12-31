import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import TestComponent from "./components/TestComponent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/test",
		element: <TestComponent />,
	},
]);

export default router;
