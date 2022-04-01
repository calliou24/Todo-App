import TodoApp from './components/TodoApp/todoApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGetData from './hooks/useGetData';

function App() {
	const { theme } = useGetData();
	return (
		<main id="main" className="App">
			<header className="header-hero" />
			<TodoApp />
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme === 'light' ? 'light' : 'dark'}
			/>
		</main>
	);
}

export default App;
