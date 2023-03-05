import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
	<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>Traning React</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/">Home (UseEffect)</NavLink>
						</li>
					
						<li>
							<NavLink to="/products">Products (UseEffect)</NavLink>
						</li>
						<li>
							<NavLink to="/input-ref">Input Ref (useRef)</NavLink>
						</li>
						<li>
							<NavLink to="/item-context">Item List (Context)</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
 );
};

export default NavBar;