import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import CheckOut from './components/CheckOut';
import Header from './components/Header';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/checkout">
						<CheckOut />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
