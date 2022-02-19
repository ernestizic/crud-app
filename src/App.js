import "./App.css";
import Todos from "./components/Todos";
// toastify imports
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className='App'>
			<ToastContainer
				position='top-center'
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				ms
				transition={Flip}
			/>
			<div className='main-todo'>
				<h2>Simple CRUD application</h2>
        <h5>Mirapayments Frontend test</h5>
        <h6>(Fetched Todo limited to 10)</h6>
				<hr />
				<Todos />
			</div>
		</div>
	);
}

export default App;
