import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" className="header__logo" />
			</Link>
			<div className="header__search">
				<input type="text" className="header__search__input" />
				<SearchIcon className="header__search__icon" />
			</div>
			<div className="header__nav">
				<div className="header__nav__opt">
					<span className="header__nav__opt--1">Hello</span>
					<span className="header__nav__opt--2">Sign In</span>
				</div>
				<div className="header__nav__opt">
					<span className="header__nav__opt--1">Returns</span>
					<span className="header__nav__opt--2">& Orders</span>
				</div>
				<div className="header__nav__opt">
					<span className="header__nav__opt--1">Your</span>
					<span className="header__nav__opt--2">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header__nav__basket">
						<ShoppingCartIcon
							style={{
								fill: '#fff'
							}}
						/>
						<span className="header__nav__opt--2 span">0</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
