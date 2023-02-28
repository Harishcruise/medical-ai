import './App.css';
import {Routes,Route} from 'react-router-dom'
import Enterprise from './pages/Enterprise';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {


	return (
		<Routes>
			<Route path='/' element={<Login />}/>
			<Route path='/Home' element={<Home />}/>
			<Route path='/Enterprise' element={<Enterprise />}/>
		</Routes>
	);
}

export default App;
